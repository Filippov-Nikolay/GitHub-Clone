using CloneGitHub.BLL.DTO;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using CloneGitHub.BLL.Infrastructure;
using CloneGitHub.BLL.Interfaces;
using AutoMapper;

namespace CloneGitHub.BLL.Services
{
    public class UserService: IUserService
    {
        private readonly IUnitOfWork Database {get; set;}
        private readonly IMapper mapper {get; set;}

        public UserService(IUnitOfWork database, IMapper _mapper){
            Database = database;
            mapper = _mapper;
        }


        private UserDTO CreateLocalUser(UserService user)
        {
          if(user != null)
          {
          return new UserDTO{
            Id = user.Id,
            UserName = user.UserName,
            Email = user.Email,
            UserDetails = new UserDetailsDTO 
            {
                Id = user.UserDetails.Id,
                UserId = user.UserDetails.UserId,
                Name = user.UserDetails.Name,
                Bio = user.UserDetails.Bio,
                Pronouns = user.UserDetails.Pronouns,
                Company = user.UserDetails.Company,
                Location = user.UserDetails.Location,
                CurrentLocationTime = user.UserDetails.CurrentLocationTime,
                WebSite = user.UserDetails.WebSite,
                LinkToSocial1 = user.UserDetails.LinkToSocial1,
                LinkToSocial2 = user.UserDetails.LinkToSocial2,
                LinkToSocial3 = user.UserDetails.LinkToSocial3,
                LinkToSocial4 = user.UserDetails.LinkToSocial4
            }
          };
          }
          return null;
        }

        private User InfoToInteraction(UserDTO userDTO)
        {
            var user = new User{
              Id = userDTO.Id,
              UserName = userDTO.UserName,
              Email = userDTO.Email,
              UserDetails = new UserDetails{
              Id = userDTO.UserDetails.Id,
              UserId = userDTO.UserDetails.UserId,
              Name = userDTO.UserDetails.Name,
              Bio = userDTO.UserDetails.Bio,
              Pronouns = userDTO.UserDetails.Pronouns,
              Company = userDTO.UserDetails.Company,
              Location = userDTO.UserDetails.Location,
              CurrentLocationTime = userDTO.UserDetails.CurrentLocationTime,
              WebSite = userDTO.UserDetails.WebSite,
              LinkToSocial1 = userDTO.UserDetails.LinkToSocial1,
              LinkToSocial2 = userDTO.UserDetails.LinkToSocial2,
              LinkToSocial3 = userDTO.UserDetails.LinkToSocial3,
              LinkToSocial4 = user.UserDetails.LinkToSocial4

            };
            return user;
        }
        }
       public async Task CreateUser(UserDTO userDTO){
          
            var user = InfoToInteraction(userDTO);
            await Database.Users.AddAsync(user);
            await Database.Save();
            
          };

          public async Task UpdateUser(UserDTO userDTO){
               var user = InfoToInteraction(userDTO);
               Database.Users.UpdateAsync(user);
               await Database.Save();
        }

        public async Task DeleteUser(int id){
          await Database.Users.DeleteAsync(id);
          await Database.Save();
        }

        public async Task<UserDTO> GetUser(int id)
        {
          var user = await Database.Users.GetByIdAsync(id);
          if(user != null){
          UserDTO userDTO = CreateLocalUserDTO(user);
          return userDTO;
          }
          return null;
        }

          public async Task<UserDTO> GetUser(string username)
        {
          var user = await Database.Users.GetUser(username);
          if(user != null){
          UserDTO userDTO = CreateLocalUserDTO(user);
          return userDTO;
          }
          return null;
        }

            public async Task<UserDTO> GetUserByEmail(string email)
        {
          var user = await Database.Users.GetUserByEmail(email);
          if(user != null){
          UserDTO userDTO = CreateLocalUserDTO(user);
          return userDTO;
          }
          return null;
        }


          public async Task<IEnumerable<UserDTO>> GetUsers()
        {
        var players = await _playerRepository.GetAllAsync(); 
        return mapper.Map<IEnumerable<PlayerDTO>>(players);
        }

    }
}
