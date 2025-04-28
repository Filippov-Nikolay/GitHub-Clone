using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Test.Models;

namespace Test.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EditController : ControllerBase
    {
        private readonly UserDbContext _context;
        private readonly IConfiguration _config;
        public EditController(UserDbContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        // Если просто GetProfile, то нужно выводить всех
        // Если нужен конкретный профиль, то нужно передавать id или userName

        //[HttpGet("{id}")]
        //public async Task<IActionResult> GetProfile(int id)

        //[HttpGet("{userName}")]
        //public async Task<IActionResult> GetProfile(string userName)

        [HttpGet("getProfile/{id}")]
        public async Task<IActionResult> GetProfile(int id)
        {
            // Получаем пользователя из куки
            if (!Request.Cookies.TryGetValue("dotcom_user", out var userName))
            {
                return Unauthorized();
            }

            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == userName);
            if (user == null)
            {
                return NotFound("User not found");
            }

            var userDetails = await _context.UserDetails.FirstOrDefaultAsync(d => d.UserId == user.Id);
            if (userDetails == null)
            {
                // Если нет - создаем новый профиль
                userDetails = new UserDetails
                {
                    UserId = user.Id,
                    Name = user.UserName,
                    Avatar = _config["UserSettings:DefaultAvatar"]
                };
                _context.UserDetails.Add(userDetails);
                await _context.SaveChangesAsync();
            }

            return Ok(userDetails);
        }

        [HttpPost("saveProfile")]
        public async Task<IActionResult> SaveProfile([FromBody] UserDetails updatedProfile)
        {
            if (!Request.Cookies.TryGetValue("dotcom_user", out var userName))
            {
                return Unauthorized();
            }

            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == userName);
            if (user == null)
            {
                return NotFound("User not found");
            }

            var userDetails = await _context.UserDetails.FirstOrDefaultAsync(d => d.UserId == user.Id);
            if (userDetails == null)
            {
                return NotFound("User profile not found");
            }

            
            // Обновляем только разрешённые поля
            userDetails.Avatar = updatedProfile.Avatar;
            userDetails.Name = updatedProfile.Name;
            userDetails.Bio = updatedProfile.Bio;
            userDetails.Pronouns = updatedProfile.Pronouns;
            userDetails.Company = updatedProfile.Company;
            userDetails.Location = updatedProfile.Location;
            userDetails.CurrentLocationTime = updatedProfile.CurrentLocationTime;
            userDetails.Timezone = updatedProfile.Timezone; 
            userDetails.WebSite = updatedProfile.WebSite;
            userDetails.LinkToSocial1 = updatedProfile.LinkToSocial1;
            userDetails.LinkToSocial2 = updatedProfile.LinkToSocial2;
            userDetails.LinkToSocial3 = updatedProfile.LinkToSocial3;
            userDetails.LinkToSocial4 = updatedProfile.LinkToSocial4;

            await _context.SaveChangesAsync();

            return Ok(userDetails);
        }
    }
}
