using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using CloneGitHub.DAL.EF;

namespace CloneGitHub.BLL.Infrastructure
{
    public static class UserContextExtensions
    {
        public static void AddUserContext(this IServiceCollection services, string connection)
        {
            services.AddDbContext<CloneGitHubContext>(options => options.UseSqlServer(connection));
        }
    }
}
