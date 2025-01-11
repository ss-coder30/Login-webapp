using System.*;

namespace backend.Model {
    public class SignUpRequest {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string ConfirmPassword { get; set; }
    }

    public class SignUpResponse {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
    }
}