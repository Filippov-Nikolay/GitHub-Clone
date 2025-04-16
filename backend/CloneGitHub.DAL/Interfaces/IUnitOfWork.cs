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
        IRepository<Activity> Activities { get; }
        // Logger
        IRepository<Repository> Repositories { get; }
        IRepository<Subscription> Subscriptions { get; }
        IRepository<User> Users { get; }
        // UserDetails
        Task<int> CompleteAsync(); // ?
        Task Save();
    }
}
