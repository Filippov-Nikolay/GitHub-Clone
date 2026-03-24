using CloneGitHub.DAL.Entities;

namespace CloneGitHub.DAL.Interfaces
{
    public interface IUnitOfWork
    {
        IRepository<Activity> Activities { get; }
        IRepositoryRepository Repositories { get; }
        IRepositoryWithPredicate<Subscription> Subscriptions { get; }
        IRepository<Logger> Loggers { get; }
        IRepository<UserDetails> UserDetails { get; }
        IUserRepository Users { get; }

        Task<int> CompleteAsync();
    }
}
