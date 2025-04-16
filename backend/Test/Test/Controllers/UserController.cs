using MailKit.Security;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MimeKit;
using Test.Models;

namespace Test.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller {
        private readonly UserDbContext _context;
        private static readonly Dictionary<string, string> resetCodes = new();

        public UserController(UserDbContext context) {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers() {
            var users = await _context.Users.ToListAsync();
            return Ok(users);
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id) {
            var user = await _context.Users.FindAsync(id);
            if (user == null) {
                return NotFound();
            }
            return Ok(user);
        }


        [HttpPut]
        public async Task<ActionResult<User>> UpdateUser(User user) {
            if (user == null) {
                return BadRequest();
            }
            _context.Entry(user).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok(user);
        }


        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user) {
            if (user == null) {
                return BadRequest();
            }

            // Проверка: уже существует пользователь с таким Email или UserName
            var existingUser = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == user.Email || u.UserName == user.UserName);

            if (existingUser != null) {
                return Conflict("A user with this email or username already exists.");
            }

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }


        [HttpPost("login")]
        public async Task<ActionResult<bool>> Login([FromBody] LoginRequest loginRequest) {
            Console.WriteLine($"Login request: {loginRequest.Username}, {loginRequest.Password}");

            var user = await _context.Users
                .FirstOrDefaultAsync(u =>
                    (u.UserName == loginRequest.Username || u.Email == loginRequest.Username) &&
                    u.Password == loginRequest.Password);

            if (user == null) {
                return Ok(false);
            }

            return Ok(true);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id) {
            var user = await _context.Users.FindAsync(id);
            if (user == null) {
                return NotFound();
            }
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return Ok(user);
        }


        // Класс для запроса логина
        public class LoginRequest {
            public string Username { get; set; }
            public string Password { get; set; }
        }


        // Reset password
        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequest request) {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (user == null)
                return NotFound("Пользователь с таким email не найден.");

            var code = new Random().Next(100000, 999999).ToString();
            resetCodes[request.Email] = code;

            var bodyHtml = $@"
                <div style='max-width: 600px; margin: auto; border: 1px solid #e1e4e8; padding: 32px; font-family: Arial, sans-serif;'>
                    <div style='text-align: center; margin-bottom: 24px;'>
                        <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='GitHub Logo' width='64' height='64' />
                    </div>
                    <h2 style='text-align: center; color: #333;'>GitHub password reset</h2>
                    <p style='font-size: 16px; color: #333;'>
                        We heard that you lost your GitHub password. Sorry about that!<br/>
                        But don't worry! You can use the following code to reset your password:
                    </p>
                    <div style='text-align: center; margin: 24px 0;'>
                        <a href='https://localhost:7044/api/User/verify-reset-code?email={request.Email}&code={code}'
                           style='background-color: #2ea44f; color: white; padding: 12px 20px; border-radius: 6px;
                                  text-decoration: none; font-weight: bold; display: inline-block;'>
                            Reset your password
                        </a>
                    </div>
                    <p style='font-size: 14px; color: #6a737d;'>
                        You're receiving this email because a password reset was requested for your account.
                    </p>
                </div>";

            // Отправка письма
            Console.WriteLine($"Отправка кода сброса на почту: {request.Email}");
            await SendEmailAsync(request.Email, "[BranchPoint] Please reset your password", bodyHtml);

            return Ok($"Код сброса отправлен на почту.");
        }

        [HttpGet("verify-reset-code")]
        public IActionResult VerifyResetCode([FromQuery] string email, [FromQuery] string code) {
            var result = VerifyCode(email, code);
            var user = _context.Users.FirstOrDefault(u => u.Email == email);
            if (result) {
                Console.WriteLine($"Код сброса для {email} подтверждён.");
                return Redirect($"http://localhost:3000/login?email={email}&code={code}");
            }
            else
                return BadRequest("Invalid or expired code.");
        }
        private bool VerifyCode(string email, string code) {
            var user = _context.Users.FirstOrDefault(u => u.Email == email);
            if (user == null)
                return false;

            if (!resetCodes.TryGetValue(email, out var storedCode) || storedCode != code)
                return false;

            return true;
        }

        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordViewModel request) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!resetCodes.TryGetValue(request.Email, out var storedCode) || storedCode != request.Code)
                return BadRequest("Неверный код.");

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (user == null)
                return NotFound("Пользователь не найден.");

            // Тут нужно зашифровать пароль
            user.Password = request.NewPassword;
            await _context.SaveChangesAsync();

            resetCodes.Remove(request.Email);

            return Ok("Пароль успешно обновлён.");
        }
        private async Task SendEmailAsync(string to, string subject, string body) {
            const string email = "BranchPoint00@gmail.com";
            const string password = "suei plvg nhuv mnjz";

            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("GitHub-Clone", email));
            message.To.Add(MailboxAddress.Parse(to));
            message.Subject = subject;
            message.Body = new TextPart("html") { Text = body };

            using var client = new MailKit.Net.Smtp.SmtpClient();
            await client.ConnectAsync("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
            await client.AuthenticateAsync(email, password);
            try {
                client.ServerCertificateValidationCallback = (s, c, h, e) => true;
                client.MessageSent += (sender, args) => Console.WriteLine("Message Sent: " + args.Response);
                await client.SendAsync(message);
                Console.WriteLine("Email sent!");
            }
            catch (Exception ex) {
                Console.WriteLine("Ошибка при отправке: " + ex.Message);
            }
            await client.DisconnectAsync(true);
        }
    }
}