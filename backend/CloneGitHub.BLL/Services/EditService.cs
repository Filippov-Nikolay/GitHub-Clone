using System.Threading.Tasks;
using AutoMapper;
using CloneGitHub.BLL.DTO;
using CloneGitHub.BLL.Interfaces;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using System.Linq; // Не забудь using System.Linq для FirstOrDefault

namespace CloneGitHub.BLL.Service
{
    public class EditService : IEditService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public EditService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<UserDetailsDTO> GetProfileAsync(string profileUserName, string currentUserName)
        {
            var user = await _unitOfWork.Users.GetUser(profileUserName);
            if (user == null) return null;

            var userDetails = (await _unitOfWork.UserDetails.GetAllAsync())
                                .FirstOrDefault(ud => ud.UserId == user.Id);

            if (userDetails == null)
            {
                userDetails = new UserDetails { UserId = user.Id };
                await _unitOfWork.UserDetails.AddAsync(userDetails);
                await _unitOfWork.CompleteAsync();
            }

            var dto = _mapper.Map<UserDetailsDTO>(userDetails);

            // Считаем количество подписчиков и подписок
            dto.FollowersCount = (await _unitOfWork.Subscriptions.FindAllAsync(s => s.FollowedId == user.Id)).Count();
            dto.FollowingCount = (await _unitOfWork.Subscriptions.FindAllAsync(s => s.FollowerId == user.Id)).Count();

            // Флаг, подписан ли currentUser на этот профиль
            if (!string.IsNullOrEmpty(currentUserName))
            {
                var currentUser = await _unitOfWork.Users.GetUser(currentUserName);
                if (currentUser != null)
                {
                    dto.IsFollowing = await _unitOfWork.Subscriptions.FindAsync(s => s.FollowerId == currentUser.Id && s.FollowedId == user.Id) != null;
                }
                else
                {
                    dto.IsFollowing = false;
                }
            }
            else
            {
                dto.IsFollowing = false;
            }

            return dto;
        }

        public async Task<UserDetailsDTO> SaveProfileAsync(string username, UserDetailsDTO updatedProfile)
        {
            var user = await _unitOfWork.Users.GetUser(username);
            if (user == null) return null;

            var userDetails = (await _unitOfWork.UserDetails.GetAllAsync())
                                .FirstOrDefault(ud => ud.UserId == user.Id);
            if (userDetails == null) return null;

            if (!string.IsNullOrWhiteSpace(updatedProfile.Avatar))
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

            _unitOfWork.UserDetails.UpdateAsync(userDetails);
            await _unitOfWork.CompleteAsync();

            return _mapper.Map<UserDetailsDTO>(userDetails);
        }

        public async Task UpdateAvatarAsync(string username, string avatarPath)
        {
            var user = await _unitOfWork.Users.GetUser(username);
            if (user == null) return;

            var userDetails = (await _unitOfWork.UserDetails.GetAllAsync())
                    .FirstOrDefault(ud => ud.UserId == user.Id);
            if (userDetails == null) return;

            Console.WriteLine($"[AVATAR] OLD AVATAR PATH: {userDetails.Avatar}");
            if (!string.IsNullOrEmpty(userDetails.Avatar) && !userDetails.Avatar.Contains("avatar_account.png"))
            {
                var relativeAvatarPath = userDetails.Avatar;

                // если по какой-то причине пришёл полный URL, вырежи только часть после /uploads
                if (userDetails.Avatar.StartsWith("http", StringComparison.OrdinalIgnoreCase))
                {
                    var uri = new Uri(userDetails.Avatar);
                    relativeAvatarPath = uri.AbsolutePath; // даст что-то типа /uploads/avatars/...
                }

                var oldPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", relativeAvatarPath.TrimStart('/').Replace('/', Path.DirectorySeparatorChar));

                Console.WriteLine($"[AVATAR] Full path to delete: {oldPath}");
                if (System.IO.File.Exists(oldPath))
                {
                    System.IO.File.Delete(oldPath);
                    Console.WriteLine("[AVATAR] Old file deleted");
                }
                else
                {
                    Console.WriteLine("[AVATAR] File NOT FOUND to delete");
                }
            }


            userDetails.Avatar = avatarPath;
            _unitOfWork.UserDetails.UpdateAsync(userDetails);
            await _unitOfWork.CompleteAsync();
        }



    }
}