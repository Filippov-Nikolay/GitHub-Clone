using CloneGitHub.BLL.DTO;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using CloneGitHub.BLL.Infrastructure;
using CloneGitHub.BLL.Interfaces;
using AutoMapper;

namespace CloneGitHub.BLL.Interfaces
{
    public class UserService
    {
        IUnitOfWork Database {get; set;}

        public UserService(IUnitOfWork database){
            Database = database;
        }
       public async Task CreateUser(UserDTO userDTO){
          var user = new User{
            Id = userDTO.Id,
            Name = userDTO.UserName,
            Email = userDTO.Email
          }
        }
    }
}