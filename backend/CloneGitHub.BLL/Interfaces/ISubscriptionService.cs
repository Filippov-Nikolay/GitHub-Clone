using System.Threading.Tasks;
using CloneGitHub.BLL.DTO;

namespace CloneGitHub.BLL.Interfaces
{
    public interface ISubscriptionService
{
    Task<IEnumerable<UserDTO>> GetFollowersByUserNameAsync(string userName, int currentUserId);
    Task<IEnumerable<UserDTO>> GetFollowingByUserNameAsync(string userName, int currentUserId);
    Task<bool> IsFollowingAsync(int followerId, int followedId);
    Task SubscribeAsync(int followerId, int followedId);
    Task UnsubscribeAsync(int followerId, int followedId);
}
}
