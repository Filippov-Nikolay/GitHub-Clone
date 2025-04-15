using Microsoft.Extensions.DependencyInjection;
using CloneGitHub.DAL.Interfaces;
using CloneGitHub.DAL.Repositories;

namespace CloneGitHub.BLL.Infrastructure
{
    public class UnitOfWorkServiceExtensions
    {
           public static void AddUnitOfWorkService(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, EFUnitOfWork>();
        }
    }
}