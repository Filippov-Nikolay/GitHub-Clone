using CloneGitHub.DAL.EF;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using CloneGitHub.DAL.Repositories;

public class EFUnitOfWork : IUnitOfWork
{
    private readonly CloneGitHubContext _context;

    public EFUnitOfWork(CloneGitHubContext context)
    {
        _context = context;
        Repositories = new RRepository<Repository>(_context);
        Activities = new RRepository<Activity>(_context);
        Users = new RRepository<User>(_context);
        Subscriptions = new RRepository<Subscription>(_context);
    }

    public IRepository<Repository> Repositories { get; }
    public IRepository<Activity> Activities { get; }
    public IRepository<User> Users { get; }
    public IRepository<Subscription> Subscriptions { get; }

    public async Task<int> CompleteAsync()
    {
        return await _context.SaveChangesAsync();
    }

    
        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }
}
