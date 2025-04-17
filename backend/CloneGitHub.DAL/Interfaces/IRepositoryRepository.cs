using CloneGitHub.DAL.Entities;


namespace CloneGitHub.DAL.Interfaces
{
    public interface IRepositoryRepository: IRepository<Repository>
    {
        Task<Repository> GetByName(string name);
    }
}
