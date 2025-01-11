using Microsoft.AspNetCore.Mvc;
using backend.DataAccessLayer;
using backend.Model;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthDL _authDL;

        public AuthController(IAuthDL authDL)
        {
            _authDL = authDL;
        }

        [HttpPost("SignUp")]
        public async Task<IActionResult> SignUp(SignUpRequest request)
        {
            var response = new SignUpResponse
            {
                IsSuccess = true,
                Message = "User signed up successfully!"
            };

            return Ok(response);
        }

        [HttpPost("SignIn")]
        public async Task<IActionResult> SignIn(SignInRequest request)
        {
            var response = new SignInResponse
            {
                IsSuccess = true,
                Message = "User signed in successfully!"
            };

            return Ok(response);
        }
    }
}
