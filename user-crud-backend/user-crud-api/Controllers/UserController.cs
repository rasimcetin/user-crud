using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using user_crud_backend_data;
using user_crud_backend_model;

namespace user_crud_api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController:ControllerBase
{
    private readonly UserContext userContext;

    public UserController(UserContext userContext)
    {
        this.userContext = userContext;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<User>))]
    public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
    {
        return Ok(await userContext.Users.Select(u => u.CreateUserDto()).ToListAsync());
    }

    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<User>))]
    public async Task<ActionResult<IEnumerable<User>>> GetUserById(Guid id)
    {
        return Ok(await userContext.Users.Where(u => u.Id == id).Select(u => u.CreateUserDto()).FirstOrDefaultAsync());
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> CreateUser(UserCreateDto dto)
    {
        User entity = dto.CreateEntity();
        try
        {
            await userContext.Users.AddAsync(entity);
            await userContext.SaveChangesAsync();
            return NoContent();
        }
        catch (Exception)
        {

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> UpdateUser(UserDto dto, Guid id)
    {
        User? user = await userContext.Users.FirstOrDefaultAsync(u => u.Id == id);
        if (user is null){
            return NotFound();
        }
        dto.ConvertDtoToEntity(user);
        try
        {
            userContext.Entry(user).State = EntityState.Modified;
            await userContext.SaveChangesAsync();
            return NoContent();
        }
        catch (Exception)
        {

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> DeleteUser(Guid id)
    {
        User? user = await userContext.Users.FirstOrDefaultAsync(u => u.Id == id);
        if (user is null){
            return NotFound();
        }
        try
        {
            userContext.Users.Remove(user);
            await userContext.SaveChangesAsync();
            return NoContent();
        }
        catch (Exception)
        {

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }
    }
}
