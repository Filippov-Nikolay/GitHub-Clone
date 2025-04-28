using System.Threading.Tasks;
using CloneGitHub.BLL.DTO;

namespace CloneGitHub.BLL.Interfaces
{
    public interface IEditService
    {
        Task<UserDetailsDTO> GetProfileAsync(string username);
        Task<UserDetailsDTO> SaveProfileAsync(string username, UserDetailsDTO updatedProfile);

    }
}
