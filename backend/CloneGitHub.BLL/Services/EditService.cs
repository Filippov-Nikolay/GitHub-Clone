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

        public async Task<UserDetailsDTO> GetProfileAsync(string username)
        {
            var user = await _unitOfWork.Users.GetUser(username);
            if (user == null) return null;

            var userDetails = (await _unitOfWork.UserDetails.GetAllAsync())
                                .FirstOrDefault(ud => ud.UserId == user.Id);

            if (userDetails == null)
            {
                userDetails = new UserDetails
                {
                    UserId = user.Id,
                    Name = user.UserName,
                };
                await _unitOfWork.UserDetails.AddAsync(userDetails);
                await _unitOfWork.CompleteAsync(); 
            }

            return _mapper.Map<UserDetailsDTO>(userDetails);
        }

        public async Task<UserDetailsDTO> SaveProfileAsync(string username, UserDetailsDTO updatedProfile)
        {
            var user = await _unitOfWork.Users.GetUser(username);
            if (user == null) return null;

            var userDetails = (await _unitOfWork.UserDetails.GetAllAsync())
                                .FirstOrDefault(ud => ud.UserId == user.Id);
            if (userDetails == null) return null;

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


    }
}
