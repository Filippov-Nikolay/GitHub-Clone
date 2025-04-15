using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using CloneGitHub.DAL.EF;

namespace CloneGitHub.BLL.Infrastructure
{
    public class UserContextExtensions
    {


        public static AddUserContext(this IServiceCollection services, string connection) //FOR WINDOWS
        {
            services.AddDbContext<UserContext>(options => options.UseSqlServer(connection));
        }

        

//FOR MACOS
        //   public static AddUserContext(this IServiceCollection services, string connection) 
        // {
        //     services.AddDbContext<UserContext>(options => options.UseMySql(connection, ServerVersion.AutoDetect(connection)));
        // }
    }
}