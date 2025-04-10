using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Test.Models;

namespace Test.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller {
        private readonly UserDbContext _context;

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
    }
}