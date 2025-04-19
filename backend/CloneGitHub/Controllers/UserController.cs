using MailKit.Security;
using Microsoft.AspNetCore.Identity.Data;
using CloneGitHub.BLL.DTO;
using CloneGitHub.BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using CloneGitHub.Models;
using MimeKit;

namespace CloneGitHub.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class UserController :Controller {
        private readonly IUserService _userService;
        private static readonly Dictionary<string, string> resetCodes = new();

        public UserController(IUserService userService) {
            _userService = userService;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetUsers() {
            var users = await _userService.GetAllUsers();
            return Ok(users);
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<UserDTO>> GetUser(int id) {
            var user = await _userService.GetUser(id);

            if (user == null) {
                return NotFound();
            }

            return Ok(user);
        }


        [HttpPut]
        public async Task<ActionResult<UserDTO>> UpdateUser(UserDTO userDTO) {
            if (userDTO == null) {
                return BadRequest();
            }

            await _userService.UpdateUser(userDTO);
            return Ok(userDTO);
        }


        [HttpPost]
        public async Task<ActionResult<UserDTO>> CreateUser(UserDTO userDTO) {
            if (userDTO == null) {
                return BadRequest();
            }

            // Проверка: уже существует пользователь с таким Email или UserName
            var existingUser = await _userService.GetUserByEmail(userDTO.Email);
            if (existingUser != null) {
                return Conflict("A user with this email or username already exists.");
            }

            await _userService.CreateUser(userDTO);
            return CreatedAtAction(nameof(GetUser), new { id = userDTO.Id }, userDTO);
        }
        [HttpPost("login")]
        public async Task<ActionResult<bool>> Login([FromBody] Models.LoginRequest loginRequest) {
            Console.WriteLine($"Login request: {loginRequest.Username}, {loginRequest.Password}");

            if (loginRequest == null) {
                return BadRequest();
            }

            var login = await _userService.GetUserByEmail(loginRequest.Username);
            var email = await _userService.GetUser(loginRequest.Username);

            if (login == null && email == null) {
                return NotFound();
            }
            
            Console.WriteLine($"{login} {email}");

            bool passwordValid = false;

            if (!passwordValid) {
                return Unauthorized();
            }

            Response.Cookies.Append("dotcom_user", loginRequest.Username, new CookieOptions {
                HttpOnly = false,
                Secure = true,
                SameSite = SameSiteMode.None,
                Expires = DateTimeOffset.UtcNow.AddDays(7)
            });

            return Ok(true);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id) {
            var user = await _userService.GetUser(id);

            if (user == null) {
                return NotFound();
            }

            await _userService.DeleteUser(id);
            return Ok(user);
        }



        // Reset password
        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequest request) {
            var user = await _userService.GetUserByEmail(request.Email);
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

            Console.WriteLine($"Отправка кода сброса на почту: {request.Email}");
            await SendEmailAsync(request.Email, "[BranchPoint] Please reset your password", bodyHtml);

            return Ok($"Код сброса отправлен на почту.");
        }
        [HttpGet("verify-reset-code")]
        public IActionResult VerifyResetCode([FromQuery] string email, [FromQuery] string code) {
            var result = VerifyCode(email, code);
            if (result) {
                Console.WriteLine($"Код сброса для {email} подтверждён.");
                return Redirect($"http://localhost:3000/login?email={email}&code={code}");
            } else {
                return BadRequest("Неверный код подтверждения.");
            }
        }
        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordViewModel request) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!resetCodes.TryGetValue(request.Email, out var storedCode) || storedCode != request.Code)
                return BadRequest("Неверный код.");

            var user = await _userService.GetUserByEmail(request.Email);
            if (user == null)
                return NotFound("Пользователь с таким email не найден.");

            // Тут нужно зашифровать пароль
            user.Password = request.NewPassword;

            resetCodes.Remove(request.Email);

            return Ok("Пароль успешно обновлён.");
        }




        private bool VerifyCode(string email, string code) {
            var user = _userService.GetUserByEmail(email);
            if (user == null) {
                return false;
            }

            if (resetCodes.TryGetValue(email, out var storedCode)) {
                if (storedCode == code) {
                    resetCodes.Remove(email);
                    return true;
                }
            }
            return false;
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
