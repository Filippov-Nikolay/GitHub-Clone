using CloneGitHub.BLL.DTO;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using CloneGitHub.BLL.Infrastructure;
using CloneGitHub.BLL.Interfaces;
using AutoMapper;

// Исправить UserDetails
namespace CloneGitHub.BLL.Services {
    public class UserService :IUserService {
        private readonly IUnitOfWork Database;
        private readonly IMapper mapper;

        public UserService(IUnitOfWork database, IMapper _mapper) {
            Database = database;
            mapper = _mapper;
        }

        private async Task<UserDTO> CreateLocalUser(UserDTO user) {
            if (user != null) {
                return new UserDTO {
                    Id = user.Id,
                    UserName = user.UserName,
                    Email = user.Email,
                    userDetailsDTO = new UserDetailsDTO {
                        Id = user.userDetailsDTO.Id,
                        UserId = user.userDetailsDTO.UserId,
                        Name = user.userDetailsDTO.Name,
                        Bio = user.userDetailsDTO.Bio,
                        Pronouns = user.userDetailsDTO.Pronouns,
                        Company = user.userDetailsDTO.Company,
                        Location = user.userDetailsDTO.Location,
                        CurrentLocationTime = user.userDetailsDTO.CurrentLocationTime,
                        WebSite = user.userDetailsDTO.WebSite,
                        LinkToSocial1 = user.userDetailsDTO.LinkToSocial1,
                        LinkToSocial2 = user.userDetailsDTO.LinkToSocial2,
                        LinkToSocial3 = user.userDetailsDTO.LinkToSocial3,
                        LinkToSocial4 = user.userDetailsDTO.LinkToSocial4
                    }
                };
            }
            return null;
        }
        
        private async Task<User> InfoToInteraction(UserDTO userDTO) {
            return new User {
                Id = userDTO.Id,
                UserName = userDTO.UserName,
                Email = userDTO.Email,
                UserDetails = new UserDetails {
                    Id = userDTO.userDetailsDTO.Id,
                    UserId = userDTO.userDetailsDTO.UserId,
                    Name = userDTO.userDetailsDTO.Name,
                    Bio = userDTO.userDetailsDTO.Bio,
                    Pronouns = userDTO.userDetailsDTO.Pronouns,
                    Company = userDTO.userDetailsDTO.Company,
                    Location = userDTO.userDetailsDTO.Location,
                    CurrentLocationTime = userDTO.userDetailsDTO.CurrentLocationTime,
                    WebSite = userDTO.userDetailsDTO.WebSite,
                    LinkToSocial1 = userDTO.userDetailsDTO.LinkToSocial1,
                    LinkToSocial2 = userDTO.userDetailsDTO.LinkToSocial2,
                    LinkToSocial3 = userDTO.userDetailsDTO.LinkToSocial3,
                    LinkToSocial4 = userDTO.userDetailsDTO.LinkToSocial4
                }
            };
        }

        public async Task CreateUser(UserDTO userDTO) {
            var user = await InfoToInteraction(userDTO);
            await Database.Users.AddAsync(user);
            await Database.CompleteAsync();
            
        }

        public async Task UpdateUser(UserDTO userDTO){
            var user = await InfoToInteraction(userDTO);
            Database.Users.UpdateAsync(user);
            await Database.CompleteAsync();
        }

        public async Task DeleteUser(int id){
            await Database.Users.DeleteAsync(id);
            await Database.CompleteAsync();
        }

        public async Task<UserDTO> GetUser(int id)
        {
            var user = await Database.Users.GetByIdAsync(id);
            if(user != null) {
                UserDTO userDTO = CreateLocalUser(user);
                return userDTO;
            }
            return null;
        }

        public async Task<UserDTO> GetUser(string username)
        {
            var user = await Database.Users.GetUser(username);
            if(user != null) {
                UserDTO userDTO = CreateLocalUser(user);
                return userDTO;
            }
            return null;
        }

      
        public async Task<UserDTO> GetUserByEmail(string email)
        {
            var user = await Database.Users.GetUserByEmail(email);
          if(user != null){
              UserDTO userDTO = CreateLocalUser(user);
              return userDTO;
          }
          return null;
        }

        public async Task<IEnumerable<UserDTO>> GetAllUsers()
        {
            var users = await Database.Users.GetAllAsync(); 
            return mapper.Map<IEnumerable<UserDTO>>(users);
        }
    }
}
