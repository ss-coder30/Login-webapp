using System.*;
using backend.Model;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;

namespace backend.DataAccesslayer {
    public class AuthDL : IAuthDL {

        public readonly IConfiguration _configuration;
        public readonly MySqlConnection _MySqlConnection;

        public AuthDL(IConfiguration configuration){
            _configuration = configuration 
        }

        public Task<SignUpResponse> SignUp(SignUpRequest request){
            throw new NotImplementedException();
        }
    } 
}