using System.Threading.Tasks;
using AutoMapper;
using CloneGitHub.BLL.DTO;
using CloneGitHub.BLL.Interfaces;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using System.Linq; // Не забудь using System.Linq для FirstOrDefault

namespace CloneGitHub.BLL.Service
{
    public class SubscriptionService : ISubscriptionService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public SubscriptionService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<IEnumerable<UserDTO>> GetFollowersByUserNameAsync(string userName, int currentUserId)
        {
            var user = await _unitOfWork.Users.GetUser(userName);
            if (user == null) throw new Exception("User not found");

            var subscriptions = await _unitOfWork.Subscriptions.FindAllAsync(s => s.FollowedId == user.Id);
            var followerIds = subscriptions.Select(s => s.FollowerId).Distinct().ToList();

            var followers = (await _unitOfWork.Users.GetAllAsync()).Where(u => followerIds.Contains(u.Id)).ToList();
            var details = (await _unitOfWork.UserDetails.GetAllAsync()).Where(d => followerIds.Contains(d.UserId)).ToList();

            var allSubscriptions = await _unitOfWork.Subscriptions.GetAllAsync();

            var result = new List<UserDTO>();

            foreach (var follower in followers)
            {
                var detailEntity = details.FirstOrDefault(d => d.UserId == follower.Id) ?? new UserDetails { UserId = follower.Id };
                var detailsDto = _mapper.Map<UserDetailsDTO>(detailEntity);

                detailsDto.FollowersCount = allSubscriptions.Count(s => s.FollowedId == follower.Id);
                detailsDto.FollowingCount = allSubscriptions.Count(s => s.FollowerId == follower.Id);
                detailsDto.IsFollowing = currentUserId != 0 && allSubscriptions.Any(s => s.FollowerId == currentUserId && s.FollowedId == follower.Id);

                var userDto = new UserDTO
                {
                    Id = follower.Id,
                    UserName = follower.UserName,
                    Email = follower.Email,
                    Password = follower.Password,
                    Salt = follower.Salt,
                    userDetailsDTO = detailsDto
                };

                result.Add(userDto);
            }

            return result;
        }


        public async Task<IEnumerable<UserDTO>> GetFollowingByUserNameAsync(string userName, int currentUserId)
        {
            var user = await _unitOfWork.Users.GetUser(userName);
            if (user == null) throw new Exception("User not found");

            var subscriptions = await _unitOfWork.Subscriptions.FindAllAsync(s => s.FollowerId == user.Id);
            var followedIds = subscriptions.Select(s => s.FollowedId).Distinct().ToList();

            var followingUsers = (await _unitOfWork.Users.GetAllAsync()).Where(u => followedIds.Contains(u.Id)).ToList();
            var details = (await _unitOfWork.UserDetails.GetAllAsync()).Where(d => followedIds.Contains(d.UserId)).ToList();

            var allSubscriptions = await _unitOfWork.Subscriptions.GetAllAsync();

            var result = new List<UserDTO>();

            foreach (var followingUser in followingUsers)
            {
                var detailEntity = details.FirstOrDefault(d => d.UserId == followingUser.Id) ?? new UserDetails { UserId = followingUser.Id };
                var detailsDto = _mapper.Map<UserDetailsDTO>(detailEntity);

                detailsDto.FollowersCount = allSubscriptions.Count(s => s.FollowedId == followingUser.Id);
                detailsDto.FollowingCount = allSubscriptions.Count(s => s.FollowerId == followingUser.Id);
                detailsDto.IsFollowing = currentUserId != 0 && allSubscriptions.Any(s => s.FollowerId == currentUserId && s.FollowedId == followingUser.Id);

                var userDto = new UserDTO
                {
                    Id = followingUser.Id,
                    UserName = followingUser.UserName,
                    Email = followingUser.Email,
                    Password = followingUser.Password,
                    Salt = followingUser.Salt,
                    userDetailsDTO = detailsDto
                };

                result.Add(userDto);
            }

            return result;
        }




        public async Task<bool> IsFollowingAsync(int followerId, int followedId)
        {
            var subscription = await _unitOfWork.Subscriptions.FindAsync(s => s.FollowerId == followerId && s.FollowedId == followedId);
            return subscription != null;
        }

        public async Task SubscribeAsync(int followerId, int followedId)
        {
            if (followerId == followedId)
                throw new ArgumentException("Нельзя подписаться на самого себя.");

            var exists = await IsFollowingAsync(followerId, followedId);
            if (exists) return;

            var subscription = new Subscription
            {
                FollowerId = followerId,
                FollowedId = followedId
            };

            await _unitOfWork.Subscriptions.AddAsync(subscription);
            await _unitOfWork.CompleteAsync();
        }

        public async Task UnsubscribeAsync(int followerId, int followedId)
        {
            var subscription = await _unitOfWork.Subscriptions.FindAsync(s => s.FollowerId == followerId && s.FollowedId == followedId);
            if (subscription != null)
            {
                await _unitOfWork.Subscriptions.DeleteAsync(subscription.Id);
                await _unitOfWork.CompleteAsync();
            }
        }
    }
}