import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const SignUpDialog = ({ onClose, openState }) => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [selectedDate, handleDateChange] = useState(new Date().getFullYear());

  return (
    <Dialog
      open={openState}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You have to have a Lawrence email to sign up for an account.
        </DialogContentText>
        <TextField
          autoFocus
          //margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
        />
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <TextField
          autoFocus
          //margin="dense"
          id="name"
          label="Name"
          type="string"
          fullWidth
        />
        <TextField
          autoFocus
          //margin="dense"
          id="major"
          label="Major"
          type="string"
          fullWidth
        />
        <TextField
          autoFocus
          //margin="dense"
          id="classOf"
          label="Class of"
          type="number"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose} color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpDialog;
