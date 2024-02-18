import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie

export const Login = () => {
  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email: loginData.loginEmail,
        password: loginData.loginPassword,
      });

      if (response.status === 200) {
        console.log("Login Successfully and the user:", response.data);
        toast.success("Login Successfully");
                // Save token in a cookie
                Cookies.set("token", response.data.token, { expires: 1 }); // Set expiration to 1 day
      
      } else {
        console.log("login Failed", response.message);
        toast.error("login failed");
      }
    } catch (error) {
      console.log("the error message is: ", error);
      toast.error("login failed");
    }
  };

  const handleLoginInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form action="/login" method="post" onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={loginData.loginEmail}
            onChange={handleLoginInputChange}
            name="loginEmail"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleLoginInputChange}
            value={loginData.loginPassword}
            name="loginPassword"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export const SignUp = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    registerEmail: "",
    registerPassword: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/register", {
        username: registerData.username,
        email: registerData.registerEmail,
        password: registerData.registerPassword,
      });
      if (response.status === 201) {
        console.log("register Successfully and the user:", response.data);
        toast.success("register Successfully");
      } else {
        console.log("register Failed", response);
        toast.error("register failed");
      }
    } catch (error) {
      console.log("the error message is: ", error);
    }
  };
  const handleRegisterInputChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form action="/signup" method="post" onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            onChange={handleRegisterInputChange}
            value={registerData.username}
            name="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={registerData.registerEmail}
            onChange={handleRegisterInputChange}
            name="registerEmail"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleRegisterInputChange}
            value={registerData.registerPassword}
            name="registerPassword"
          />
        </div>
        <button onClick={handleRegister} className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
