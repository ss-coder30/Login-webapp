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
            SignUpResponse response = new SignUpResponse(); // Corrected type

            try
            {
                response = await _authDL.SignUp(request);
            }
            catch (Exception e)
            {
                response.IsSuccess = false;
                response.Message = e.Message;
            }

            return Ok(response);
        }

        [HttpPost("SignIn")]
        public async Task<IActionResult> SignIn(SignInRequest request)
        {
            SignInResponse response = new SignInResponse();

            try {
                response = await _authDL.SignIn(request);
            }
            catch (Exception e)
            {
                response.IsSuccess = false;
                response.Message = e.Message;
            }

            return Ok(response);
        }
    }
}
