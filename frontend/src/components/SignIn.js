import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthServices from '../services/AuthServices'; 

const authService = new AuthServices();

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      Password: "",
      UserNameFlag: false,
      PasswordFlag: false,
    };
  }

  handleValues = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSignup = (e) => {
    this.props.navigate("/");
  };

  checkValidity() {
    let isValid = true;
    this.setState({
      UserNameFlag: false,
      PasswordFlag: false,
    });

    if (this.state.Username === "") {
      this.setState({ UserNameFlag: true });
      isValid = false;
    }
    if (this.state.Password === "") {
      this.setState({ PasswordFlag: true });
      isValid = false;
    }

    return isValid;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.checkValidity()) {
      const data = {
        username: this.state.Username,
        password: this.state.Password,
      };

      authService
        .SignIn(data)
        .then((response) => {
          console.log("Sign-in successful: ", response);
          if (response.data.isSuccess) {
            alert("Signed in successfully!")
            this.props.navigate("/home");
          } else {
            alert('Sign-in failed, please check details!');
            console.log("something went wrong!");
          }
        })
        .catch((error) => {
            alert("Sign-in failed, please check details!");
          console.error("Error during sign-in: ", error);
        });
    } else {
      alert("Sign-in failed, please check details!");
      console.log("Validation failed");
    }
  };

  render() {
    return (
      <div className="Signin-container h-full w-full flex justify-center items-center bg-zinc-900">
        <div className="Signin-subcontainer h-[70%] w-[45%] border border-gray-300 rounded-lg bg-zinc-800">
          <div className="Header h-[15%] w-full flex justify-center items-center text-blue-500 text-[30px] font-medium mt-5">
            Sign In
          </div>

          <div className="Body h-[70%] w-full">
            <form className="form h-full w-full flex flex-col justify-center items-center">
              <input
                type="text"
                className={`textField p-4 rounded-lg w-2/3 m-3 mt-2 border border-solid ${
                  this.state.UserNameFlag ? "border-red-600" : "border-blue-600"
                } bg-zinc-600`}
                placeholder="Username"
                name="Username"
                value={this.state.Username}
                onChange={this.handleValues}
              />
              {this.state.UserNameFlag && (
                <span className="text-red-600">Username is required</span>
              )}

              <input
                type="password"
                className={`textField p-4 rounded-lg w-2/3 m-3 mt-2 border border-solid ${
                  this.state.PasswordFlag ? "border-red-600" : "border-blue-600"
                } bg-zinc-600`}
                placeholder="Password"
                name="Password"
                value={this.state.Password}
                onChange={this.handleValues}
              />
              {this.state.PasswordFlag && (
                <span className="text-red-600">Password is required</span>
              )}
            </form>
          </div>

          <div className="Button h-[15%] w-full flex justify-around items-center">
            <button
              type="button"
              className="SignIn Btn bg-slate-200 pt-2 pb-2 pl-4 pr-4 rounded-lg text-blue-600 mb-20 hover: border-solid border-blue-400"
              onClick={this.handleSignup}
            >
              Create New Account
            </button>

            <button
              type="button"
              className="SignUp Btn border bg-blue-600 text-white pt-2 pb-2 pl-4 pr-4 rounded-lg mb-20"
              onClick={this.handleSubmit}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function SignUpWrapper() {
  const navigate = useNavigate();
  return <SignIn navigate={navigate} />;
}

export default SignUpWrapper;