import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header";
import Home from "./components/home";

import Register from "./components/register";
import Login from './components/login';


function App() {


  return (
    <Router>
      <Header />

  
      <div className="container-fluid m-0 p-0">

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Routes>


        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
