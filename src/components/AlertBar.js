import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { alertActions } from "../store/alertSlice";

function AlertBar({alertStates}) {
    const {alertState, message} = alertStates
    const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(alertActions.closeAlert())
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={alertState}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={message.messageType} sx={{ width: "100%" }}>
        {message.title}
      </Alert>
    </Snackbar>
  );
}


export default AlertBar;
