import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header";
import Home from "./components/home";
import { Login, SignUp } from "./components/loginForm";

function App() {


  return (
    <Router>
            <Header/>

<Home/>
      <div className="container">

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
        

        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
