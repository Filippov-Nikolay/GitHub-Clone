using CloneGitHub.BLL.DTO;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using CloneGitHub.BLL.Interfaces;
using AutoMapper;

namespace CloneGitHub.BLL.Services
{
    public class RepositoryService : IRepositoryService
    {
        private readonly IUnitOfWork Database;
        private readonly IMapper mapper;

        public RepositoryService(IUnitOfWork database, IMapper _mapper)
        {
            Database = database;
            mapper = _mapper;
        }


        private RepositoryDTO CreateLocalRepository(Repository repository)
        {
            if (repository != null)
            {
                return new RepositoryDTO
                {
                    Id = repository.Id,
                    UserId = repository.UserId,
                    Name = repository.Name,
                    Description = repository.Description,
                    IsPrivate = repository.IsPrivate,
                    IsPinned = repository.IsPinned
                };
            }
            return null;
        }
        private Repository InfoToInteraction(RepositoryDTO repositoryDTO)
        {
            if (repositoryDTO != null)
            {
                return new Repository
                {
                    Id = repositoryDTO.Id,
                    UserId = repositoryDTO.UserId,
                    Name = repositoryDTO.Name,
                    Description = repositoryDTO.Description,
                    IsPrivate = repositoryDTO.IsPrivate,
                    IsPinned = repositoryDTO.IsPinned
                };
            }
            return null;
        }
        public async Task CreateRepository(RepositoryDTO repositoryDTO)
        {
            var repository = InfoToInteraction(repositoryDTO);
            await Database.Repositories.AddAsync(repository);
            await Database.CompleteAsync();
        }
        public async Task DeleteRepository(int id)
        {
            await Database.Repositories.DeleteAsync(id);
        }


        public async Task UpdateRepository(RepositoryDTO repositoryDTO)
        {
            var exists = await Database.Repositories.GetAllAsync();

            bool repoExists = exists.Any(r =>
                r.Name == repositoryDTO.Name &&
                r.UserId == repositoryDTO.UserId &&
                r.Id != repositoryDTO.Id);




            if (repoExists)
                throw new Exception("this repository name already exists");

            var repository = InfoToInteraction(repositoryDTO);
            Database.Repositories.UpdateAsync(repository);
            await Database.CompleteAsync();
        }


public async Task ToggleRepositoryVisibility(int repositoryId)
{
    var repository = await Database.Repositories.GetByIdAsync(repositoryId);
    if (repository == null)
        throw new Exception("Repository not found");

    repository.IsPrivate = !repository.IsPrivate;

    Database.Repositories.UpdateAsync(repository);
    await Database.CompleteAsync();
}


        public async Task<RepositoryDTO> GetRepository(int id)
        {
            var repository = await Database.Repositories.GetByIdAsync(id);
            if (repository != null)
            {
                RepositoryDTO repositoryDTO = CreateLocalRepository(repository);
                return repositoryDTO;
            }
            return null;
        }

        public async Task<RepositoryDTO> GetRepository(string name)
        {
            var repository = await Database.Repositories.GetByName(name);
            if (repository != null)
            {
                RepositoryDTO repositoryDTO = CreateLocalRepository(repository);
                return repositoryDTO;
            }
            return null;
        }
        public async Task<IEnumerable<RepositoryDTO>> GetAllRepositories()
        {
            var repositories = await Database.Repositories.GetAllAsync();
            return mapper.Map<IEnumerable<RepositoryDTO>>(repositories);
        }




        public async Task<RepositoryDTO> GetByUserNameAndRepoNameAsync(string username, string repoName)
        {
            var repository = await Database.Repositories.GetByUserNameAndRepoNameAsync(username, repoName);
            if (repository != null)
            {
                return CreateLocalRepository(repository);
            }
            return null;
        }

public async Task<IEnumerable<RepositoryDTO>> GetRepositoriesByUserId(int userId)
{
    var allRepositories = await Database.Repositories.GetAllAsync();
    var userRepos = allRepositories.Where(r => r.UserId == userId);
    return mapper.Map<IEnumerable<RepositoryDTO>>(userRepos);
}




    }
}