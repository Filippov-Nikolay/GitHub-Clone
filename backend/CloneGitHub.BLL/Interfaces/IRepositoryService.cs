using CloneGitHub.BLL.DTO;

namespace CloneGitHub.BLL.Interfaces
{
    public interface IRepositoryService
    {
        Task CreateRepository(RepositoryDTO repositoryDTO);
        Task DeleteRepository(int id);
        Task UpdateRepository(RepositoryDTO repositoryDTO);
        Task GetRepository<T>(int id);
        Task GetRepository<T>(string name);
        Task<IEnumerable<RepositoryDTO>> GetAllRepositories();
    }
}