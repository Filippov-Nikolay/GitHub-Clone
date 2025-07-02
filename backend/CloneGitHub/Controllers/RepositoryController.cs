using CloneGitHub.BLL.DTO;
using CloneGitHub.BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using CloneGitHub.Models;


namespace CloneGitHub.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class RepositoryController : ControllerBase
    {
        private readonly IRepositoryService _repositoryService;
        private readonly IUserService _userService;


        public RepositoryController(IRepositoryService repositoryService, IUserService userService)
        {
            _repositoryService = repositoryService;
            _userService = userService;
        }


        [HttpPost("createRepository")]
        public async Task<ActionResult> CreateRepository([FromBody] RepositoryDTO repositoryDTO)
        {
            if (!Request.Cookies.TryGetValue("dotcom_user", out var userName))
            {
                return Unauthorized();
            }

            var profile = await _userService.GetUser(userName);
            if (profile == null)
            {
                return NotFound("User not found");
            }

            if (repositoryDTO == null || string.IsNullOrWhiteSpace(repositoryDTO.Name))
            {
                return BadRequest("Invalid repository data");
            }

            var existingName = await _repositoryService.GetRepository(repositoryDTO.Name);

            if (existingName != null)
            {
                return Conflict("this repository name already exists");
            }

            repositoryDTO.UserId = profile.Id;
            Console.WriteLine($"Создание репозитория от имени пользователя {profile.UserName}, ID: {profile.Id}");
            Console.WriteLine($"ID: {repositoryDTO.Id} Name: {repositoryDTO.Name}, Description: {repositoryDTO.Description}, IsPinned: {repositoryDTO.IsPinned}, IsPrivate: {repositoryDTO.IsPrivate}, UserId: {repositoryDTO.UserId}");

            await _repositoryService.CreateRepository(repositoryDTO);

            return Ok("Repository created successfully");

        }

        [HttpGet("getByUserNameAndRepoName/{username}/{repoName}")]

        public async Task<IActionResult> GetByUserNameAndRepoName(string username, string repoName)
        {
            var repoDto = await _repositoryService.GetByUserNameAndRepoNameAsync(username, repoName);
            if (repoDto == null) return NotFound("Repository not found");

            return Ok(repoDto);
        }



        [HttpPut("editRepository")]
        public async Task<ActionResult> EditRepository(RepositoryDTO repositoryDTO)
        {
            if (repositoryDTO == null || string.IsNullOrWhiteSpace(repositoryDTO.Name))
            {
                return BadRequest("Invalid repository data");
            }

            var existingName = await _repositoryService.GetRepository(repositoryDTO.Name);

            if (existingName != null)
            {
                return Conflict("this repository name already exists");
            }


            await _repositoryService.UpdateRepository(repositoryDTO);
            return Ok(repositoryDTO);


        }


        [HttpDelete("deleteRepository")]
        public async Task<ActionResult> DeleteRepository([FromQuery] int id)
        {
          Console.WriteLine($"Попытка удалить репозиторий с ID: {id}");

            var repository = await _repositoryService.GetRepository(id);

            if (repository == null)
                return NotFound("Repository not found");

            await _repositoryService.DeleteRepository(id);

            return Ok("Repository deleted successfully");
        }

[HttpPost("toggleVisibility/{id}")]
public async Task<IActionResult> ToggleVisibility(int id)
{
    try
    {
        await _repositoryService.ToggleRepositoryVisibility(id);
        return Ok();
    }
    catch (Exception ex)
    {
        return BadRequest(ex.Message);
    }
}


        [HttpGet("{id}")]
        public async Task<ActionResult> GetRepository(int id)
        {

            var repository = await _repositoryService.GetRepository(id);

            if (repository == null)
            {
                return NotFound();
            }


            return Ok(repository);

        }

        [HttpGet("userRepos/{username}")]
        public async Task<ActionResult<IEnumerable<RepositoryDTO>>> GetUserRepositories(string username)
        {
            var user = await _userService.GetUser(username);
            if (user == null)
            {
                return NotFound("User not found");
            }

            var repositories = await _repositoryService.GetRepositoriesByUserId(user.Id);
            return Ok(repositories);
        }


       [HttpGet("userRepos/{username}/public")]
public async Task<ActionResult<IEnumerable<RepositoryDTO>>> GetPublicRepositories(string username)
{
    var user = await _userService.GetUser(username);
    if (user == null)
    {
        return NotFound("User not found");
    }

    var isOwner = false;

    if (Request.Cookies.TryGetValue("dotcom_user", out var currentUsername))
    {
        isOwner = currentUsername == user.UserName;
    }

    var repositories = await _repositoryService.GetRepositoriesByUserId(user.Id);

    if (!isOwner)
    {
        repositories = repositories.Where(r => r.IsPrivate == false).ToList();
    }

    return Ok(repositories);
}


    



    }

}