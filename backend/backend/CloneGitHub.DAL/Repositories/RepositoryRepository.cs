using CloneGitHub.DAL.EF;
using Microsoft.EntityFrameworkCore;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;

namespace CloneGitHub.DAL.Repositories
{
    public class RepositoryRepository: IRepository<Repository>
    {
           private CloneGitHubContext db;


        public RepositoryRepository(CloneGitHubContext _db)
        {
            db = _db;
        }


        public async Task<IEnumerable<Repository>> GetAllAsync(){
           return await db.Repositories.ToListAsync();
        }
        public async Task<Repository> GetByIdAsync(int id)
        {
            return await db.Repositories.FindAsync(id);
        }


         public async Task<Repository> GetByNameAsync(string name)
         {
             return await db.Repositories.Where(r => r.Name == name).FirstOrDefaultAsync();
         }

            public async Task<IEnumerable<Repository>> GetByUserId(int id)
         {
             return await db.Repositories.Where(r => r.UserId == id).ToListAsync();
         }

        public async Task AddAsync(Repository repository)
        {
            if(repository != null)
            {
               await db.Repositories.AddAsync(repository);
            }
        }
        public void UpdateAsync(Repository repository)
        {
             if(repository != null)
            {
               db.Entry(repository).State = EntityState.Modified;
            }
        }
        public async Task DeleteAsync(int id)
        {
            if( id >= 0)
            {
                Repository repository = await db.Repositories.FindAsync(id);
                 db.Repositories.RemoveRange(repository);
            }
        }
        

    }
}