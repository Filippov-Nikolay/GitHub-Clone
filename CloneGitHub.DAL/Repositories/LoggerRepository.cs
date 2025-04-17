using CloneGitHub.DAL.EF;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CloneGitHub.DAL.Repositories
{
    public class LoggerRepository : IRepository<Logger>
    {
        private readonly CloneGitHubContext _context;

        public LoggerRepository(CloneGitHubContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Logger>> GetAllAsync()
        {
            return await _context.Loggers.ToListAsync();
        }

        public async Task<Logger> GetByIdAsync(int id)
        {
            return await _context.Loggers.FindAsync(id);
        }


        public async Task AddAsync(Logger entity)
        {
            await _context.Loggers.AddAsync(entity);
        }

        public void UpdateAsync(Logger entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Loggers.FindAsync(id);
            if (entity != null)
            {
                _context.Loggers.Remove(entity);
            }
        }
    }
}
