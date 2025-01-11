using System;
using System.Threading.Tasks;
using backend.Model;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;

namespace backend.DataAccessLayer
{
    public class AuthDL : IAuthDL
    {
        private readonly IConfiguration _configuration;
        private readonly MySqlConnection _mySqlConnection;

        public AuthDL(IConfiguration configuration)
        {
            _configuration = configuration;
            _mySqlConnection = new MySqlConnection(_configuration["ConnectionStrings:MySqlConnection"]);
        }

        public Task<SignUpResponse> SignUp(SignUpRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<SignInResponse> SignIn(SignInRequest request)
        {
            throw new NotImplementedException();
        }
    }
}
