using CloneGitHub.DAL.Entities;

namespace CloneGitHub.DAL.Interfaces
{
    internal interface IUserRepository: IRepository<User>
    {
         Task<User> GetUserByEmail(string email);
    }
}
