using CloneGitHub.DAL.EF;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using CloneGitHub.DAL.Repositories;

public class EFUnitOfWork : IUnitOfWork
{
    private readonly CloneGitHubContext _context;
    // ActiveRepository
    // LoggerRepository
    // RepositoryRepository
    // SubscriptionRepository
    // UserRepository
    // UserDetailsRepository
}
