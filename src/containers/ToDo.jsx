import React from 'react';
import { useState } from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  
  const handleClick = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <div className='todo'>
      <h2 className='title'>To-Do List</h2>
      <ToDoForm handleClick={handleClick}/>
      <ToDoList todos={todos} />
    </div>
  );
};

export default ToDo;