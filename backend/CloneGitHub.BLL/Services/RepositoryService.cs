using CloneGitHub.BLL.DTO;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using CloneGitHub.BLL.Infrastructure;
using CloneGitHub.BLL.Interfaces;
using AutoMapper;

namespace CloneGitHub.BLL.Services
{
    public class RepositoryService: IRepositoryService
    {
        private readonly IUnitOfWork Database {get; set;}
        private readonly IMapper mapper {get; set;}

         public RepositoryService(IUnitOfWork database, IMapper _mapper){
            Database = database;
            mapper = _mapper;
        }


private RepositoryDTO CreateLocalRepository(Repository repository)
{
    if(repository != null)
    {
        return new RepositoryDTO
        {
            Id = repository.Id,
            UserId = repository.UserId,
            Description = repository.Description,
            IsPrivate = repository.IsPrivate,
            IsPinned = repository.IsPinned
        };
    }
    return null;
}
private Repository InfoToInteraction(RepositoryDTO repositoryDTO)
{
    if(repositoryDTO != null){
    var repository = new Repository
    {
        Id = repositoryDTO.Id,
        Name = repositoryDTO.Name,
        Description = repositoryDTO.Description,
        IsPrivate = repositoryDTO.IsPrivate,
        IsPinned = repositoryDTO.IsPinned
    }
    
    return repository;
    }

    return null;

}
 public async Task CreateRepository(RepositoryDTO repositoryDTO)
 {

      var repository = InfoToInteraction(repositoryDTO);
      await Database.Repositories.AddAsync(repository);
      await Database.Save();
    
    
 }
        public async Task DeleteRepository(int id)
        {
            await Database.Repositories.DeleteAsync(id);
        }

    
        public async Task UpdateRepository(RepositoryDTO repositoryDTO)
        {
            var repository = InfoToInteraction(repositoryDTO);
            await Database.Repository.UpdateAsync(repository);
            await Database.Save();
        }
       public async Task GetRepository(int id)
        {
            var repository = await Database.Repository.GetAsync(id);
            if(repository != null)
            {
                RepositoryDTO repositoryDTO = CreateLocalRepositoryDTO(repository);
                return repositoryDTO;
            }
            return null;
        }
        Task GetRepository(string name)
        {
         var repository = await Database.Repository.GetAsync(name);
            if(repository != null)
            {
                RepositoryDTO repositoryDTO = CreateLocalRepositoryDTO(repository);
                return repositoryDTO;
            }
            return null;
        }
        Task<IEnumerable<RepositoryDTO>> GetAllRepositories();



    }
}