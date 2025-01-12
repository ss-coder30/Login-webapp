import React, { Component } from "react";
import AuthServices from "../services/AuthServices";

const authService = new AuthServices();

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      Password: "",
      ConfirmPassword: "",
      UserNameFlag: false,
      PasswordFlag: false,
      ConfirmPasswordFlag: false,
    };
  }

  handleValues = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  checkValidity() {
    let isValid = true;
    this.setState({
      UserNameFlag: false,
      PasswordFlag: false,
      ConfirmPasswordFlag: false,
    });

    if (this.state.Username === "") {
      this.setState({ UserNameFlag: true });
      isValid = false;
    }
    if (this.state.Password === "") {
      this.setState({ PasswordFlag: true });
      isValid = false;
    }
    if (this.state.ConfirmPassword === "") {
      this.setState({ ConfirmPasswordFlag: true });
      isValid = false;
    }
    if (this.state.Password !== this.state.ConfirmPassword) {
      this.setState({ ConfirmPasswordFlag: true });
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
        confirmPassword: this.state.ConfirmPassword,
      };

      authService
        .SignUp(data)
        .then((response) => {
          console.log("Sign-up successful: ", response);
        })
        .catch((error) => {
          console.error("Error during sign-up: ", error);
        });
    } else {
      console.log("Validation failed");
    }
  };

  render() {
    return (
      <div className="Signup-container h-full w-full flex justify-center items-center bg-zinc-900">
        <div className="Signup-subcontainer h-[70%] w-[45%] border border-gray-300 rounded-lg bg-zinc-800">
          <div className="Header h-[15%] w-full flex justify-center items-center text-blue-500 text-[30px] font-medium mt-5">
            Sign Up
          </div>

          <div className="Body h-[70%] w-full">
            <form
              className="form h-full w-full flex flex-col justify-center items-center"
              onSubmit={this.handleSubmit}
            >
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

              <input
                type="password"
                className={`textField p-4 rounded-lg w-2/3 m-3 mt-2 border border-solid ${
                  this.state.ConfirmPasswordFlag
                    ? "border-red-600"
                    : "border-blue-600"
                } bg-zinc-600`}
                placeholder="Confirm Password"
                name="ConfirmPassword"
                value={this.state.ConfirmPassword}
                onChange={this.handleValues}
              />
              {this.state.ConfirmPasswordFlag && (
                <span className="text-red-600">
                  {this.state.Password !== this.state.ConfirmPassword
                    ? "Passwords do not match"
                    : "Confirm Password is required"}
                </span>
              )}

              {/* <button
                type="submit"
                className="SignUp Btn border bg-blue-600 text-white pt-2 pb-2 pl-4 pr-4 rounded-lg mt-4 text-xl"
              >
                Sign Up
              </button> */}
            </form>
          </div>
          <div className="Button h-[15%] w-full flex justify-around items-center">
            <button
              type="button"
              className="SignUp Btn border bg-blue-600 text-white pt-2 pb-2 pl-4 pr-4 rounded-lg mb-20 text-xl"
              onClick={this.handleSubmit}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="SignIn Btn bg-slate-200 pt-2 pb-2 pl-4 pr-4 rounded-lg text-blue-600 mb-20 hover: border-solid border-blue-400 text-xl"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
}
