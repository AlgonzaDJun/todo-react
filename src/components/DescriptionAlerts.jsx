import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({ open, handleClose, message }) {
  return (
    <Snackbar
      style={{ textAlign: "left" }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert 
        onClose={handleClose} 
        severity="error" 
        sx={{ width: "100%" }}
      >
        <AlertTitle>Terjadi Eror</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
}
