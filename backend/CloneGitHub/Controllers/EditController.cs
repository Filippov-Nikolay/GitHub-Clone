using Microsoft.AspNetCore.Mvc;
using CloneGitHub.BLL.DTO;
using CloneGitHub.BLL.Interfaces;

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
    }
}
