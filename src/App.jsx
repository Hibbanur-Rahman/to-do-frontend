import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Login, SignUp } from "./components/loginForm";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() === "") {
      toast.error("The field cannot be empty.");
    } else {
      toast.success("New task added.");
      setInputValue("");
    }
  };

  return (
    <Router>
      <div className="container  vh-100">
        <div className="row m-0 p-0">
          <Link to="/signup">
            <button className="btn btn-primary w-auto m-3">SignUp</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-primary w-auto m-3">Login</button>
          </Link>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <div className="row m-0 p-0 justify-content-center align-items-center">
        <div className="card p-4">
          <h2 className="mb-4">TODO List</h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter task..."
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={addTask}
            >
              Add
            </button>
          </div>
        </div>
        </div>

        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
