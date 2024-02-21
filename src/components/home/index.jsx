import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Loginbg from "../../assets/img/banner.png";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Cookies from 'js-cookie';

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [task, setTaskInput] = useState({
    taskName: "",
    completed: false,
    tags: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleTask = async (e) => {
    e.preventDefault();
    const { taskName } = task;
    if (!taskName.trim()) {
      toast.error("The task name cannot be empty.");
      return;
    }

    try {
      const token = Cookies.get('token');
      const response = await axios.post("http://localhost:8000/add-Task", task, {
        headers: {
          Authorization: `${token}`
        }
      });
      
      if (response.status === 200) {
        toast.success("New task added.");
        setTaskInput({
          taskName: "",
          completed: false,
          tags: ""
        });
      }
    } catch (error) {
      toast.error("Failed to add task.");
      console.error("Error adding task:", error);
    }
  };

  return (
    <>
      <div className="main-wrapper">
        {/* banner */}
        <section
          className="home-slide d-flex align-items-center"
          style={{ backgroundImage: `url(${Loginbg})` }}
        >
          <div className="container">
            <div className="row m-0 p-0 justify-content-center align-items-center">
              <div className="card p-4">
                <h2 className="mb-4">TODO List</h2>
                <form onSubmit={handleTask}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={task.taskName}
                      onChange={handleInputChange}
                      name="taskName"
                      placeholder="Enter task..."
                    />
                    <input
                      type="text"
                      className="form-control"
                      value={task.tags}
                      onChange={handleInputChange}
                      placeholder="Enter tags..."
                      name="tags"
                    />
                    <button className="btn btn-primary" type="submit">
                      Add
                    </button>
                  </div>
                </form>
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
