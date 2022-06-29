import React from 'react';

const ToDoList = ({todos}) => {
  

  return (
    <div className='todo-list'>
      <ul>
        {
          todos.map((item, index) => {
            return <li key={index}>{item}</li> 
          })
        }
      </ul>
    </div>
  );
};

export default ToDoList;
