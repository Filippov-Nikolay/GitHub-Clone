using System.Threading.Tasks;
using CloneGitHub.BLL.DTO;

namespace CloneGitHub.BLL.Interfaces
{
    public interface IEditService
    {
        Task<UserDetailsDTO> GetProfileAsync(string profileUserName, string currentUserName);
        Task<UserDetailsDTO> SaveProfileAsync(string username, UserDetailsDTO updatedProfile);
        Task UpdateAvatarAsync(string username, string avatarPath);

    }
}
