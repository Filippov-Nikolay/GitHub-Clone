using CloneGitHub.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CloneGitHub.DAL.Interfaces
{
    public interface IUnitOfWork
    {
        IRepository<Repository> Repositories { get; }
        IRepository<Activity> Activities { get; }
        IRepository<User> Users { get; }
        IRepository<Subscription> Subscriptions { get; }
        Task<int> CompleteAsync();
    }
}
