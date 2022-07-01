import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import CustomizedSnackbars from "../components/DescriptionAlerts";

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  const handleClick = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      task: todo,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleCheckBox = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);

    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const handleDelete = () => {
    // filter todos yang complete true
    const newTodos = todos.filter((todo) => todo.complete === false);
    setTodos(newTodos);
  };

  const handleDelete2 = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // membuat state open alert
  const [openAlert, setOpenAlert] = useState(false);

  const handleAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <div className="todo">
      <h2 className="title">To-Do List</h2>
      <ToDoForm handleClick={handleClick} />
      <ToDoList
        todos={todos}
        handleCheckBox={handleCheckBox}
        handleDelete2={handleDelete2}
        open={openAlert}
        handleAlert={handleAlert}
        // handleAlertMessage={handleAlertMessage}
      />
      <Button
        className="checkedButton"
        variant="outlined"
        color="error"
        open={openAlert}
        onClick={
          todos.filter((todo) => todo.complete === true).length > 0
            ? handleDelete
            : handleAlert
        }
      >
        Remove All Checked
      </Button>
      <>
      <CustomizedSnackbars
        open={openAlert}
        handleClose={handleCloseAlert}
        message={"Ceklis To-Do yang ingin dihapus"}
      />
      </>
    </div>
  );
};

export default ToDo;
