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
        private readonly IEditService _editService;


        public RepositoryController(IRepositoryService repositoryService, IEditService editService)
        {
            _repositoryService = repositoryService;
            _editService = editService;
        }
        
        
        [HttpPost("createRepository")]
        public async Task<ActionResult> CreateRepository([FromBody]RepositoryDTO repositoryDTO)
        {
            if (!Request.Cookies.TryGetValue("dotcom_user", out var userName))
            {
                return Unauthorized();
            }
            
            var profile = await _editService.GetProfileAsync(userName);
            if (profile == null)
            {
                return NotFound("User not found");
            }

            if(repositoryDTO == null || string.IsNullOrWhiteSpace(repositoryDTO.Name)){
                return BadRequest("Invalid repository data");
            }

            var existingName = await _repositoryService.GetRepository(repositoryDTO.Name);

            if (existingName != null)
            {
                return Conflict("this repository name already exists");
            }
            repositoryDTO.UserId = profile.Id;

            await _repositoryService.CreateRepository(repositoryDTO);

            return Ok("Repository created successfully");
            
        }


        [HttpPut("editRepository")]
        public async Task<ActionResult> EditRepository(RepositoryDTO repositoryDTO)
        {
            if(repositoryDTO == null || string.IsNullOrWhiteSpace(repositoryDTO.Name)){
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
        public async Task<ActionResult> DeleteRepository(int id)
        {

            if(id == null)
            {
                return NotFound();
            }

            var repository = await _repositoryService.GetRepository(id);

            if(repository == null)
            {
                return NotFound();
            }
            


            await _repositoryService.DeleteRepository(id);

            return Ok(repository);

        }


        [HttpGet("{id}")]
        public async Task<ActionResult> GetRepository(int id)
        {

            var repository = await _repositoryService.GetRepository(id);
            
            if(repository == null)
            {
                return NotFound();
            }

            
            return Ok(repository);

        }
        

    }

}