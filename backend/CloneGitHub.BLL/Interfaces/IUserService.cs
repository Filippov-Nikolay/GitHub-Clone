using CloneGitHub.BLL.DTO;

namespace CloneGitHub.BLL.Interfaces
{
    public interface IUserService
    {
        Task CreateUser(UserDTO userDTO);
        Task UpdateUser(UserDTO userDTO);
        Task DeleteUser(int id);
        Task<UserDTO> GetUser(int id);
        Task<UserDTO> GetUser(string username);
        Task<UserDTO> GetUserByEmail(string email);
        Task<ICollection<UserDTO userDTO>> GetAllUsers();

    }
}