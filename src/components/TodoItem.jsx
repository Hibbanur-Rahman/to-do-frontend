import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {toast} from 'react-toastify';

const TodoItem = (props) => {

    console.log(props.index);

    const handleCompleted=async (e)=>{
        const keyIndex=props.index;
        console.log(keyIndex)
        try{
            const token=Cookies.get('token');
            const response=await axios.post('http://localhost:8000/update-completed',keyIndex,{
                headers:{
                    Authorization: `${token}`
                }
            });

            console.log(response);
            if(response.status=== 200){
                toast.success("updated and completed successfully");
                
            }
        }catch(error){
            console.log("error in completed:",error);
            toast.error("failed to done the task")
        }
    

    }
    const handleDeleted= async (e)=>{
        toast.success("Deleted successfully")

    }
  return (
    <div className="row m-0 p-0 border border-1  rounded-3 align-items-center  ">
      <div className="col-8">
        <h1>{props.taskName}</h1>
      </div>
      <div className="col-4">
        <button className="btn btn-success w-auto ms-2 me-2" onClick={handleCompleted}>Done</button>
        <button className="btn btn-danger w-auto" onClick={handleDeleted}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
