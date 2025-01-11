using System.*;
using backend.Model;

namespace backend.DataAccesslayer {
    public interface IAuthDL
    {
        public Task<SignUpResponse> SignUp(SignUpRequest request)
    }
}