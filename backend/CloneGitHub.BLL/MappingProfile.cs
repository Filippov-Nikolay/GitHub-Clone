using AutoMapper;
using CloneGitHub.BLL.DTO;
using CloneGitHub.DAL.Entities;

namespace CloneGitHub.BLL.MappingProfiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // User <-> UserDTO
            CreateMap<User, UserDTO>()
                .ForMember(dest => dest.userDetailsDTO, opt => opt.MapFrom(src => src.UserDetails))
                .ReverseMap()
                .ForMember(dest => dest.UserDetails, opt => opt.MapFrom(src => src.userDetailsDTO));

            // UserDetails <-> UserDetailsDTO
            CreateMap<UserDetails, UserDetailsDTO>().ReverseMap();
            CreateMap<Repository, RepositoryDTO>();
        }
    }
}
