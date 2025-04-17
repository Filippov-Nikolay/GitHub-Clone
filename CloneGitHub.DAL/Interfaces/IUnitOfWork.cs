using CloneGitHub.DAL.Entities;

namespace CloneGitHub.DAL.Interfaces
{
    public interface IUnitOfWork
    {
        IRepository<Activity> Activities { get; }
        IRepository<Repository> Repositories { get; }
        IRepository<Subscription> Subscriptions { get; }
        IRepository<User> Users { get; }
        IRepository<Logger> Loggers { get; }
        IRepository<UserDetails> UserDetails { get; }

        Task<int> CompleteAsync();
    }
}
