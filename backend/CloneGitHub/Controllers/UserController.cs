using MailKit.Security;
using Microsoft.AspNetCore.Identity.Data;
using CloneGitHub.BLL.DTO;
using CloneGitHub.BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using CloneGitHub.Models;
using MimeKit;
using CloneGitHub.DAL.Entities;
using System.Security.Claims;

namespace CloneGitHub.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        private readonly JwtTokenGenerator _jwtTokenGenerator;
        private static readonly Dictionary<string, string> resetCodes = new();

        public UserController(IUserService userService, JwtTokenGenerator jwtTokenGenerator)
        {
        public UserController(IUserService userService, JwtTokenGenerator jwtTokenGenerator)
        {
            _userService = userService;
            _jwtTokenGenerator = jwtTokenGenerator;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetUsers()
        {
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetUsers()
        {
            return Ok(await _userService.GetAllUsers());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UserDTO>> GetUser(int id)
        {
        public async Task<ActionResult<UserDTO>> GetUser(int id)
        {
            var user = await _userService.GetUser(id);

            if (user == null)
            {
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPut]
        public async Task<ActionResult<UserDTO>> UpdateUser(UserDTO userDTO)
        {
            if (userDTO == null)
            {
        public async Task<ActionResult<UserDTO>> UpdateUser(UserDTO userDTO)
        {
            if (userDTO == null)
            {
                return BadRequest();
            }

            await _userService.UpdateUser(userDTO);
            return Ok(userDTO);
        }

        [HttpPost]
        public async Task<ActionResult<UserDTO>> CreateUser(UserDTO userDTO)
        {
            if (userDTO == null)
            {
        public async Task<ActionResult<UserDTO>> CreateUser(UserDTO userDTO)
        {
            if (userDTO == null)
            {
                Console.WriteLine($"Какое-то поле является пустым: {ModelState.IsValid}");
                return BadRequest();
            }

            // Проверка: уже существует пользователь с таким Email или UserName
            var existingUser = await _userService.GetUserByEmail(userDTO.Email)
                            ?? await _userService.GetUser(userDTO.UserName);

            if (existingUser != null)
            {
            if (existingUser != null)
            {
                return Conflict("Пользователь с таким email или логином уже существует.");
            }

            var salt = PasswordHasher.GenerateSalt();
            var hash = PasswordHasher.HashPassword(userDTO.Password, salt);

            userDTO.Salt = salt;
            //userDTO.Password = hash;

            await _userService.CreateUser(userDTO);

            var createdUser = await _userService.GetUser(userDTO.UserName);

            // Генерируем JWT токен
            var token = _jwtTokenGenerator.GenerateToken(createdUser);
            SetAuthCookies(userDTO, token);

            return CreatedAtAction(nameof(GetUser), new { id = userDTO.Id }, userDTO);
        }

        [HttpPost("login")]
        public async Task<ActionResult<bool>> Login([FromBody] Models.LoginRequest loginRequest)
        {
        public async Task<ActionResult<bool>> Login([FromBody] Models.LoginRequest loginRequest)
        {
            Console.WriteLine($"Login request: {loginRequest.Username}, {loginRequest.Password}");

            if (loginRequest == null)
            {
            if (loginRequest == null)
            {
                return Ok(false);
            }

            var user = await _userService.GetUser(loginRequest.Username)
                    ?? await _userService.GetUserByEmail(loginRequest.Username);

            if (user == null)
            {
            if (user == null)
            {
                return Ok($"Пользователь с таким логином или email не найден: {loginRequest.Username}");
            }

            //bool passwordValid = PasswordHasher.VerifyPassword(loginRequest.Password, user.Password, user.Salt);
            bool passwordValid = user.Password == loginRequest.Password;

            if (!passwordValid)
            {
            if (!passwordValid)
            {
                return Ok("Неверный логин или пароль.");
            }

            Response.Cookies.Append("dotcom_user", user.UserName, new CookieOptions
            {
                HttpOnly = false,
                Secure = true,
                SameSite = SameSiteMode.None,
                Expires = DateTimeOffset.UtcNow.AddDays(7)
            });

            // Генерируем JWT токен
            var token = _jwtTokenGenerator.GenerateToken(user);
            SetAuthCookies(user, token);

            return Ok(true);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
        public async Task<ActionResult> DeleteUser(int id)
        {
            var user = await _userService.GetUser(id);

            if (user == null)
            {
            if (user == null)
            {
                return NotFound();
            }

            await _userService.DeleteUser(id);
            return Ok(user);
        }


        // Reset password
        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequest request)
        {
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequest request)
        {
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
                        <a href='https://{HttpContext.Request.Host}/api/User/verify-reset-code?email={request.Email}&code={code}'
                           style='background-color: #2ea44f; color: white; padding: 12px 20px; border-radius: 6px;
                                  text-decoration: none; font-weight: bold; display: inline-block;'>
                            Reset your password
                        </a>
                    </div>
                    <p style='font-size: 14px; color: #6a737d;'>
                        You're receiving this email because a password reset was requested for your account.
                    </p>
                </div>";

            Console.WriteLine($"Отправка кода сброса на почту: {request.Email}\nКод: {code}");
            await SendEmailAsync(request.Email, "[BranchPoint] Please reset your password", bodyHtml);

            return Ok($"Код сброса отправлен на почту.");
        }
        [HttpGet("verify-reset-code")]
        public async Task<IActionResult> VerifyResetCode([FromQuery] string email, [FromQuery] string code)
        {
        public async Task<IActionResult> VerifyResetCode([FromQuery] string email, [FromQuery] string code)
        {
            var result = await VerifyCodeAsync(email, code);
            if (result)
            {
            if (result)
            {
                Console.WriteLine($"Код сброса для {email} подтверждён.");
                return Redirect($"http://localhost:3000/login?email={email}&code={code}");
            }
            else
            {
            }
            else
            {
                return BadRequest("Неверный код подтверждения.");
            }
        }
        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordViewModel request)
        {
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordViewModel request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!resetCodes.TryGetValue(request.Email, out var storedCode) || storedCode != request.Code)
                return BadRequest("Неверный код.");

            var user = await _userService.GetUserByEmail(request.Email);
            if (user == null)
                return NotFound("Пользователь с таким email не найден.");

            var salt = PasswordHasher.GenerateSalt();
            var hash = PasswordHasher.HashPassword(request.NewPassword, salt);

            user.Salt = salt;
            //user.Password = hash;
            user.Password = request.NewPassword;

            await _userService.UpdateUser(user);

            resetCodes.Remove(request.Email);

            return Ok("Пароль успешно обновлён.");
        }


        private async Task<bool> VerifyCodeAsync(string email, string code)
        {
        private async Task<bool> VerifyCodeAsync(string email, string code)
        {
            var user = await _userService.GetUserByEmail(email);

            if (user == null)
                return false;

            if (!resetCodes.TryGetValue(email, out var storedCode) || storedCode != code)
                return false;

            return true;
        }
        private async Task SendEmailAsync(string to, string subject, string body)
        {
        private async Task SendEmailAsync(string to, string subject, string body)
        {
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
            try
            {
            try
            {
                client.ServerCertificateValidationCallback = (s, c, h, e) => true;
                client.MessageSent += (sender, args) => Console.WriteLine("Message Sent: " + args.Response);
                await client.SendAsync(message);
                Console.WriteLine("Email sent!");
            }
            catch (Exception ex)
            {
            catch (Exception ex)
            {
                Console.WriteLine("Ошибка при отправке: " + ex.Message);
            }
            await client.DisconnectAsync(true);
        }


        private void SetAuthCookies(UserDTO userDTO, string token)
        {
            var userCookieOptions = new CookieOptions
            {
                HttpOnly = false,
                Secure = false,
                SameSite = SameSiteMode.None,
                Expires = DateTimeOffset.UtcNow.AddDays(7)
            };

            var tokenCookieOptions = new CookieOptions
            {
            var tokenCookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Secure = false,
                SameSite = SameSiteMode.None,
                Expires = DateTimeOffset.UtcNow.AddDays(7)
            };

            Response.Cookies.Append("dotcom_user", userDTO.UserName, userCookieOptions);
            Response.Cookies.Append("user_session", token, tokenCookieOptions);
        }
        

        

    }
}