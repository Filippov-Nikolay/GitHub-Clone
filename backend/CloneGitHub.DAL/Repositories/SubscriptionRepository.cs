using CloneGitHub.DAL.EF;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace CloneGitHub.DAL.Repositories
{
    public class SubscriptionRepository : IRepositoryWithPredicate<Subscription>
    {
        private readonly CloneGitHubContext _db;

        public SubscriptionRepository(CloneGitHubContext context)
        {
            _db = context;
        }

        public async Task<IEnumerable<Subscription>> GetAllAsync()
        {
            return await _db.Subscriptions.ToListAsync();
        }

        public async Task<Subscription> GetByIdAsync(int id)
        {
            return await _db.Subscriptions.FindAsync(id);
        }


        public async Task AddAsync(Subscription subscription)
        {
            if (subscription != null)
            {
                await _db.Subscriptions.AddAsync(subscription);
            }
        }

        public void UpdateAsync(Subscription subscription)
        {
            if (subscription != null)
            {
                _db.Entry(subscription).State = EntityState.Modified;
            }
        }

        public async Task DeleteAsync(int id)
        {
            var subscription = await _db.Subscriptions.FindAsync(id);
            if (subscription != null)
            {
                _db.Subscriptions.Remove(subscription);
            }
        }

        public async Task<Subscription> FindAsync(Expression<Func<Subscription, bool>> predicate)
        {
            return await _db.Subscriptions.FirstOrDefaultAsync(predicate);
        }

        public async Task<IEnumerable<Subscription>> FindAllAsync(Expression<Func<Subscription, bool>> predicate)
        {
            return await _db.Subscriptions.Where(predicate).ToListAsync();
        }
    }
}
