using System.Threading.Tasks;
using backend.Model;

namespace backend.DataAccessLayer
{
    public interface IAuthDL
    {
        Task<SignUpResponse> SignUp(SignUpRequest request);
        Task<SignInResponse> SignIn(SignInRequest request);
    }
}
