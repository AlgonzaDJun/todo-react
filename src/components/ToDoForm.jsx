import React, { useState } from 'react';

const ToDoForm = ({handleClick, enterButton}) => {

  const [todo, setTodo] = useState("");

  const submitHandler = (todo) => {
    handleClick(todo)
    setTodo("")
  }

  return (
    <div className='todo-form'>
      <p>~ Today I need to ~</p>
      <span>
        <input 
          value={todo} 
          onKeyPress={enterButton}

          //setiap kali input nya berubah, tolong ubah state yang todo di atas. (event.target.value berarti di dalam field input)
          onChange={(event) => setTodo(event.target.value)}/>
        <button onClick={() => submitHandler(todo)}>Submit</button>
      </span>
    </div>
  );
};

export default ToDoForm;
