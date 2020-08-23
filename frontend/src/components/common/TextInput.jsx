import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles(() => ({
  textField: {
    background: "white",
    boxShadow: "7px 7px 0px 0px rgba(0,0,0,0.15)",
    fontStyle: "italic",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important",
  },
}));

const TextInput = ({
  placeholder = "",
  autoFocus = false,
  password = false,
  startAdornment = "",
  multiline = false,
}) => {
  const classes = useStyles();

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

  return (
    (password && (
      <OutlinedInput
        className={classes.textField}
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange("password")}
        placeholder={placeholder}
        autoFocus={autoFocus}
        classes={{
          notchedOutline: classes.notchedOutline,
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    )) || (
      <TextField
        className={classes.textField}
        placeholder={placeholder}
        variant="outlined"
        multiline={multiline}
        autoFocus={autoFocus}
        InputProps={{
          startAdornment: startAdornment && (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
          classes: {
            notchedOutline: classes.notchedOutline,
          },
        }}
      />
    )
  );
};

export default TextInput;
