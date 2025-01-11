using System;
using System.Threading.Tasks;
using backend.Model;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Data.Common;

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

        public async Task<SignUpResponse> SignUp(SignUpRequest request)
        {

            SignUpResponse response = new SignUpResponse();
            response.IsSuccess = true;
            response.Message = "User signed up successfully!";

            try{

                if(!request.Password.Equals(request.ConfirmPassword)){
                    response.IsSuccess = false;
                    response.Message = "Password and Confirm Password not matching!";
                    return response;
                }

                if(_mySqlConnection.State != System.Data.ConnectionState.Open){
                    await _mySqlConnection.OpenAsync();
                }

                string SqlQuery = @"insert into crudoperations.userdetail (USERNAME, PASSWORD) Values (@USERNAME, @PASSWORD)";

                using (MySqlCommand mysqlCommand = new MySqlCommand(SqlQuery, _mySqlConnection)){
                    mysqlCommand.CommandType = System.Data.CommandType.Text;
                    mysqlCommand.CommandTimeout = 180;
                    mysqlCommand.Parameters.AddWithValue("@USERNAME", request.Username);
                    mysqlCommand.Parameters.AddWithValue("@PASSWORD", request.Password);
                    int status = await mysqlCommand.ExecuteNonQueryAsync();

                    if(status <= 0){
                        response.IsSuccess = false;
                        response.Message = "Failed to insert data!";
                        return response;
                    }
                }
            } 
            catch (Exception e){
                response.IsSuccess = false;
                response.Message = e.Message;
            } 
            finally {
                await _mySqlConnection.CloseAsync();
                await _mySqlConnection.DisposeAsync();
            }

            return response;
        }

        public async Task<SignInResponse> SignIn(SignInRequest request)
        {
            SignInResponse response = new SignInResponse();
            response.IsSuccess = true;
            response.Message = "User logged in successfully!";

            try
            {
                if (_mySqlConnection.State != System.Data.ConnectionState.Open)
                {
                    await _mySqlConnection.OpenAsync();
                }

                string SqlQuery = @"select * from crudoperations.userdetail where USERNAME = @Username and PASSWORD = @Password";

                using (MySqlCommand mysqlCommand = new MySqlCommand(SqlQuery, _mySqlConnection))
                {
                    mysqlCommand.CommandType = System.Data.CommandType.Text;
                    mysqlCommand.CommandTimeout = 180;
                    mysqlCommand.Parameters.AddWithValue("@USERNAME", request.Username);
                    mysqlCommand.Parameters.AddWithValue("@PASSWORD", request.Password);
                    using (DbDataReader dataReader = await mysqlCommand.ExecuteReaderAsync()) // corrected here
                    {
                        if (dataReader.HasRows)
                        {
                            response.Message = "Login successful"; // corrected here
                        }
                        else
                        {
                            response.IsSuccess = false;
                            response.Message = "Invalid username or password!";
                        }
                    }
                }
            }
            catch (Exception e)
            {
                response.IsSuccess = false;
                response.Message = e.Message;
            }
            finally
            {
                await _mySqlConnection.CloseAsync();
                await _mySqlConnection.DisposeAsync();
            }

            return response;
        }

    }
}
