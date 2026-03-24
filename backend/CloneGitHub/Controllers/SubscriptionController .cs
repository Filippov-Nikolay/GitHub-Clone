using Microsoft.AspNetCore.Mvc;
using CloneGitHub.BLL.DTO;
using CloneGitHub.BLL.Interfaces;
using CloneGitHub.BLL.Services;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace CloneGitHub.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SubscriptionController : ControllerBase
    {
        private readonly ISubscriptionService _subscriptionService;

        public SubscriptionController(ISubscriptionService subscriptionService)
        {
            _subscriptionService = subscriptionService;
        }

        private int GetCurrentUserId()
        {
            var userIdClaim = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (int.TryParse(userIdClaim, out int userId))
                return userId;
            return 0;
        }

        [AllowAnonymous]
        [HttpGet("followers/{userName}")]
        public async Task<IActionResult> GetFollowersByUserName(string userName)
        {
            var currentUserId = GetCurrentUserId(); // 0, если неавторизован
            var followers = await _subscriptionService.GetFollowersByUserNameAsync(userName, currentUserId);
            return Ok(followers);
        }

        [AllowAnonymous]
        [HttpGet("following/{userName}")]
        public async Task<IActionResult> GetFollowingByUserName(string userName)
        {
            var currentUserId = GetCurrentUserId();
            var following = await _subscriptionService.GetFollowingByUserNameAsync(userName, currentUserId);
            return Ok(following);
        }

        [Authorize]
        [HttpPost("subscribe/{followedId}")]
        public async Task<IActionResult> Subscribe(int followedId)
        {
            var followerId = GetCurrentUserId();
            await _subscriptionService.SubscribeAsync(followerId, followedId);
            return Ok();
        }

        [Authorize]
        [HttpDelete("unsubscribe/{followedId}")]
        public async Task<IActionResult> Unsubscribe(int followedId)
        {
            var followerId = GetCurrentUserId();
            await _subscriptionService.UnsubscribeAsync(followerId, followedId);
            return Ok();
        }
    }


}