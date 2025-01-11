using System.*;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.DataAccessLayer;
using backend.Model;

namespace backend.Controllers {
    [Route(template "api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase{

        public readonly IAuthDL _authDL;

        public AuthController(IAuthDL authDL){
            _authDL = authDL
        }

        public async Task<IActionResult> SignUp(SignUpRequest request){

            SignUpResponse response = new SignUpResponse();

            try {

            } catch (Exception e) {
                response.IsSuccess = false;
                response.Message = e.Message;
            }

            return Ok(response);
        }
    }
}