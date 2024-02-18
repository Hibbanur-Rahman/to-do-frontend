import { useState } from "react";

export const Login = () => {

  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: ""
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email: loginData.loginEmail,
        password: loginData.loginPassword
      })
    } catch (error) {
      console.log("the error message is: ", error);
    }

  }
  const handleLoginInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

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
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
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
    registerPassword: ""
  });

  const handleRegister = async (e) => {
    try {
      const response = await axios.post('http://localhost:8000/register', {
        username: registerData.username,
        email: registerData.registerEmail,
        password: registerData.registerPassword
      });


    } catch (error) {
      console.log("the error message is: ", error);
    }
  }
  const handleRegisterInputChange = (e) => {
    setLoginData({ ...registerData, [e.target.name]: e.target.value })
  }
  return (
    <>
      <form action="/register" method='post' onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
