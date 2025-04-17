using CloneGitHub.DAL.EF;
using CloneGitHub.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CloneGitHub.DAL.Repositories
{
    public class RRepository<T> : IRepository<T> where T : class
    {
        protected readonly CloneGitHubContext _context;
        private readonly DbSet<T> _dbSet;

        public RRepository(CloneGitHubContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }


        
        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }


        public async Task AddAsync(T entity)
        {
            await _dbSet.AddAsync(entity);
        }

        public void UpdateAsync(T entity)
        {
             _dbSet.Entry(entity).State = EntityState.Modified;
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await GetByIdAsync(id);
            if (entity != null)
            {
                _dbSet.Remove(entity);
            }
        }
    }
}
