using CloneGitHub.DAL.EF;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CloneGitHub.DAL.Repositories
{
    public class ActivityRepository : IRepository<Activity>
    {
        private readonly CloneGitHubContext _db;

        public ActivityRepository(CloneGitHubContext context)
        {
            _db = context;
        }

        public async Task<IEnumerable<Activity>> GetAllAsync()
        {
            return await _db.Activities.ToListAsync();
        }

        public async Task<Activity> GetByIdAsync(int id)
        {
            return await _db.Activities.FindAsync(id);
        }

        public async Task AddAsync(Activity activity)
        {
            if (activity != null)
            {
                await _db.Activities.AddAsync(activity);
            }
        }

        public void UpdateAsync(Activity activity)
        {
            if (activity != null)
            {
                _db.Entry(activity).State = EntityState.Modified;
            }
        }

        public async Task DeleteAsync(int id)
        {
            var activity = await _db.Activities.FindAsync(id);
            if (activity != null)
            {
                _db.Activities.Remove(activity);
            }
        }
    }
}
