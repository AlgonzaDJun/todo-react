import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {React} from "react";
import DeleteIcon from "@mui/icons-material/Delete";


const ToDoList = ({ todos, handleCheckBox, handleDelete2, handleAlert, open, handleAlertMessage}) => {
  return (
    <div className="todo-list">
      <List>
        {todos.map((todo, index) => {
          return (
            <ListItem key={index}>
              <ListItemButton>
                <Checkbox
                  checked={todo.complete}
                  onChange={() => handleCheckBox(todo.id)}
                  disableRipple
                />
                <ListItemText
                  primary={todo.task}
                  checked={todo.complete}
                  onClick={() => handleCheckBox(todo.id)}
                  className={todo.complete && "complete"} // hasil perpendek dari {todo.complete ? "complete" : ""}
                />
                <IconButton
                  open={open}
                  aria-label="delete"
                  onClick={
                    todo.complete
                      ? () => handleDelete2(todo.id)
                      : () => handleAlert()
                  }
                  // handleAlertMessage={handleAlertMessage("Silakan Checklist To-Do Terlebih Dahulu")}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ToDoList;
