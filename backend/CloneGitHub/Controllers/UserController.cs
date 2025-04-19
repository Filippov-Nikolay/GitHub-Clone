using MailKit.Security;
using Microsoft.AspNetCore.Identity.Data;
using CloneGitHub.BLL.DTO;
using CloneGitHub.BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using CloneGitHub.Models;

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
    }
}
