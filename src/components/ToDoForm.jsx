import { Button, TextField } from "@mui/material";
import CustomizedSnackbars from "./DescriptionAlerts";

import React, { useState } from "react";

const ToDoForm = ({ handleClick, open, handleClose, message }) => {
  const [todo, setTodo] = useState("");

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

  const submitHandler = (todo) => {
    if (todo !== "") {
      handleClick(todo);
      setTodo("");
    } else {
      handleAlert();
    }
  };

  const enterButton = (ev) => {
    if (ev.key === "Enter") {
      handleClick(todo);
      setTodo("");
    }
  };

  return (
    <div className="todo-form">
      <p>~ Today I need to ~</p>
      <span>
        <TextField
          value={todo}
          onKeyPress={(ev) => enterButton(ev)}
          //setiap kali input nya berubah, tolong ubah state yang todo di atas. (event.target.value berarti di dalam field input)
          onChange={(event) => setTodo(event.target.value)}
          variant="outlined"
          label="Add To-Do"
        />
        <Button
          onClick={() => {
            submitHandler(todo);
          }}
          variant="contained"
          color="success"
        >
          Add
        </Button>
        <CustomizedSnackbars
          open={openAlert}
          handleClose={handleCloseAlert}
          message={"Silakan isi To-Do terlebih dahulu"}
        />
      </span>
    </div>
  );
};

export default ToDoForm;
