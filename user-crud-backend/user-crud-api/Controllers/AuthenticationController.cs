using Microsoft.AspNetCore.Mvc;
using user_crud_backend_model;

namespace user_crud_api.Controllers;

[Controller]
[Route("api/[controller]")]
public class AuthenticationController:ControllerBase
{
    [HttpPost]
    public IActionResult Login(LoginDto loginDto){
        if (loginDto.Email == "test@mail" && loginDto.Password == "password")
        {    
            return Ok();
        }

        return Unauthorized();
    }
}
