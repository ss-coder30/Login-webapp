import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <div className="Signup-container h-full w-full flex justify-center items-center bg-zinc-900">
        <div className="Signup-subcontainer h-[70%] w-[45%] border border-gray-300 rounded-lg bg-zinc-800">
          <div className="Header h-[15%] w-full flex justify-center items-center text-blue-500 text-[30px] font-medium mt-5">
            Sign Up
          </div>

          <div className="Body h-[70%] w-full">
            <form className="form h-full w-full flex flex-col justify-center items-center">
              <input
                type="text"
                className="textField p-4 rounded-lg w-2/3 m-3 mt-2 border border-solid border-blue-600 bg-zinc-600"
                placeholder="Username"
              />
              <input
                type="password"
                className="textField p-4 rounded-lg w-2/3 m-3 border border-solid border-blue-600 bg-zinc-600"
                placeholder="Password"
              />
              <input
                type="password"
                className="textField p-4 rounded-lg w-2/3 mt-3 border border-solid border-blue-600 bg-zinc-600"
                placeholder="Confirm Password"
              />
            </form>
          </div>

          <div className="Button h-[15%] w-full flex justify-around items-center">
            <button
              type="button"
              className="SignUp Btn border bg-blue-600 text-white pt-2 pb-2 pl-4 pr-4 rounded-lg mb-20 text-xl"
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
