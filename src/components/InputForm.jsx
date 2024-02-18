import React, { useState } from 'react';
import { toast } from 'react-toastify';


const InputForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value || '');
  };

  const addTask = () => {
    if (inputValue.trim() === '') {
      return toast.error('The field cannot be empty.');
    }

    const newTask = {
      title: inputValue.trim(),
      completed: false,
    };
    toast.success('New task added.');
    setInputValue('');
  };

  return (
    <div className="add-task">
      <input
        className="input-task"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter task..."
      />
      <button className="btn-task" onClick={addTask}>
        Add
      </button>
    </div>
  );
};

export default InputForm;
