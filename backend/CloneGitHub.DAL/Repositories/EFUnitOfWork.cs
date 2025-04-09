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
        Repositories = new Repository<Repository>(_context);
        Activities = new Repository<Activity>(_context);
        Users = new Repository<User>(_context);
        Subscriptions = new Repository<Subscription>(_context);
    }

    public IRepository<Repository> Repositories { get; }
    public IRepository<Activity> Activities { get; }
    public IRepository<User> Users { get; }
    public IRepository<Subscription> Subscriptions { get; }

    public async Task<int> CompleteAsync()
    {
        return await _context.SaveChangesAsync();
    }
}
