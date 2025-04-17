using CloneGitHub.DAL.EF;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CloneGitHub.DAL.Repositories
{
    public class EFUnitOfWork : IUnitOfWork
    {
        private readonly CloneGitHubContext db;

        private RepositoryRepository repositoryRepository;
        private UserRepository userRepository;
        private ActivityRepository activityRepository;
        private SubscriptionRepository subscriptionRepository;
        private LoggerRepository loggerRepository;
        private UserDetailsRepository userDetailsRepository;

        public EFUnitOfWork(CloneGitHubContext context)
        {
            db = context;
        }

        public IRepository<Activity> Activities
        {
            get
            {
                if (activityRepository == null)
                    activityRepository = new ActivityRepository(db);
                return activityRepository;
            }
        }

        public IRepository<Repository> Repositories
        {
            get
            {
                if (repositoryRepository == null)
                    repositoryRepository = new RepositoryRepository(db);
                return repositoryRepository;
            }
        }

        public IRepository<Subscription> Subscriptions
        {
            get
            {
                if (subscriptionRepository == null)
                    subscriptionRepository = new SubscriptionRepository(db);
                return subscriptionRepository;
            }
        }

        public IRepository<User> Users
        {
            get
            {
                if (userRepository == null)
                    userRepository = new UserRepository(db);
                return userRepository;
            }
        }

        public IRepository<Logger> Loggers
        {
            get
            {
                if (loggerRepository == null)
                    loggerRepository = new LoggerRepository(db);
                return loggerRepository;
            }
        }

        public IRepository<UserDetails> UserDetails
        {
            get
            {
                if (userDetailsRepository == null)
                    userDetailsRepository = new UserDetailsRepository(db);
                return userDetailsRepository;
            }
        }

        public async Task<int> CompleteAsync()
        {
            return await db.SaveChangesAsync();
        }
    }
}
