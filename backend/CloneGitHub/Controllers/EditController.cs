using Microsoft.AspNetCore.Mvc;
using CloneGitHub.BLL.DTO;
using CloneGitHub.BLL.Interfaces;
using CloneGitHub.BLL.Services;
using Microsoft.AspNetCore.Authorization;

namespace CloneGitHub.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EditController : ControllerBase
    {
        private readonly IEditService _editService;

        public EditController(IEditService editService)
        {
            _editService = editService;
        }

        [HttpGet("getProfile")]
        public async Task<IActionResult> GetProfile()
        {
            if (!Request.Cookies.TryGetValue("dotcom_user", out var userName))
            {
                return Unauthorized();
            }

            var profile = await _editService.GetProfileAsync(userName);
            if (profile == null)
            {
                return NotFound("User not found");
            }

            return Ok(profile);
        }

        [HttpGet("getProfileByName/{username}")]
        public async Task<IActionResult> GetProfileByName(string username)
        {
            var profile = await _editService.GetProfileAsync(username);
            if (profile == null)
            {
                return NotFound("User not found");
            }

            return Ok(profile);
        }



        // TEST
        [Authorize] // Обязателен для проверки, есть ли у пользователя токен
        [HttpGet("info")]
        public async Task<ActionResult<UserDTO>> GetCurrentUser() {
            Console.WriteLine("TEST");

            var userName = User.Identity?.Name;
            Console.WriteLine($"\nTEST: {userName}");
            if (string.IsNullOrEmpty(userName))
                return Unauthorized();

            var user = await _editService.GetProfileAsync(userName);
            if (user == null)
                return NotFound();

            return Ok(user);
        }



        [HttpPost("saveProfile")]
        public async Task<IActionResult> SaveProfile([FromBody] UserDetailsDTO updatedProfile)
        {
            if (!Request.Cookies.TryGetValue("dotcom_user", out var userName))
            {
                return Unauthorized();
            }

            var result = await _editService.SaveProfileAsync(userName, updatedProfile);
            if (result == null)
            {
                return NotFound("User profile not found");
            }

            return Ok(result);
        }
        public class UploadAvatarRequest
        {
            [FromForm(Name = "avatar")]
            public IFormFile Avatar { get; set; }
        }

        [HttpPost("uploadAvatar")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> UploadAvatar([FromForm] UploadAvatarRequest request)
        {
            if (!Request.Cookies.TryGetValue("dotcom_user", out var userName))
            {
                return Unauthorized();
            }

            var avatar = request.Avatar;
            if (avatar == null || avatar.Length == 0)
            {
                return BadRequest("No file uploaded");
            }

            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png" };
            var extension = Path.GetExtension(avatar.FileName).ToLower();
            if (!allowedExtensions.Contains(extension))
            {
                return BadRequest("Only image files (jpg, jpeg, png) are allowed.");
            }

            var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "avatars");
            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }

            var fileName = $"avatar_profile_{Guid.NewGuid()}{extension}";
            var filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await avatar.CopyToAsync(stream);
            }

            var relativePath = $"/uploads/avatars/{fileName}";
            await _editService.UpdateAvatarAsync(userName, relativePath);

            return Ok(new { avatarPath = relativePath });
        }



    }
}