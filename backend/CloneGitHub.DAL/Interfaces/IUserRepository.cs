using CloneGitHub.DAL.Entities;

namespace CloneGitHub.DAL.Interfaces
{
    public interface IUserRepository: IRepository<User>
    {
         Task<User> GetUserByEmail(string email);
         Task<User> GetUser(string username);
    }
}
