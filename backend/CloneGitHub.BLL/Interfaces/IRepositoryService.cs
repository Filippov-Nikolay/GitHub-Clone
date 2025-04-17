using CloneGitHub.BLL.DTO;

namespace CloneGitHub.BLL.Interfaces
{
    public interface IRepositoryService
    {
        Task CreateRepository(RepositoryDTO repositoryDTO);
        Task UpdateRepository(RepositoryDTO repositoryDTO);
        Task DeleteRepository(int id);
        Task<RepositoryDTO> GetRepository(int id);
        Task<RepositoryDTO> GetRepository(string name);
        Task<IEnumerable<RepositoryDTO>> GetAllRepositories();
    }
}