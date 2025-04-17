using CloneGitHub.DAL.EF;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CloneGitHub.DAL.Repositories
{
    public class UserDetailsRepository : IRepository<UserDetails>
    {
        private readonly CloneGitHubContext _db;

        public UserDetailsRepository(CloneGitHubContext context)
        {
            _db = context;
        }

        public async Task<IEnumerable<UserDetails>> GetAllAsync()
        {
            return await _db.UserDetails.ToListAsync();
        }

        public async Task<UserDetails> GetByIdAsync(int id)
        {
            return await _db.UserDetails.FindAsync(id);
        }


        public async Task AddAsync(UserDetails userDetails)
        {
            if (userDetails != null)
            {
                await _db.UserDetails.AddAsync(userDetails);
            }
        }

        public void UpdateAsync(UserDetails userDetails)
        {
            if (userDetails != null)
            {
                _db.Entry(userDetails).State = EntityState.Modified;
            }
        }

        public async Task DeleteAsync(int id)
        {
            var userDetails = await _db.UserDetails.FindAsync(id);
            if (userDetails != null)
            {
                _db.UserDetails.Remove(userDetails);
            }
        }
    }
}
