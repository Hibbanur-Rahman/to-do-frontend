import React, { useState } from "react";
import { toast} from "react-toastify";
import Loginbg from "../../assets/img/banner.png";

import AOS from "aos";

import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


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
    <>
      <div className="main-wrapper">
        {/* banner */}
        <section
          className="home-slide d-flex align-items-center"
          style={{ backgroundImage: "url(" + Loginbg + ")" }}
        >
          <div className="container">
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
          </div>
        </section>
        {/* /banner */}

        {/* Home banner bottom */}
      </div>
    </>
  );
};

export default Home;
