import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import red from "@material-ui/core/colors/red";

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
  notchedOutlineRed: {
    borderWidth: "2px",
    borderColor: `${red[300]} !important`,
  },
  errorText: {
    fontStyle: "italic",
    fontWeight: 500,
    color: red[300],
    fontSize: "85%",
    margin: "10px 0 0 0",
  },
}));

const TextInput = ({
  placeholder = "",
  startAdornment = "",
  errorText = null,
  autoFocus = false,
  password = false,
  multiline = false,
  onChange,
  defaultValue,
  name,
}) => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    (password && (
      <>
        <OutlinedInput
          className={classes.textField}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onChange={onChange}
          name={name}
          classes={{
            notchedOutline: errorText
              ? classes.notchedOutlineRed
              : classes.notchedOutline,
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errorText && <p className={classes.errorText}>{errorText}</p>}
      </>
    )) || (
      <>
        <TextField
          className={classes.textField}
          placeholder={placeholder}
          variant="outlined"
          multiline={multiline}
          autoFocus={autoFocus}
          onChange={onChange}
          name={name}
          defaultValue={defaultValue}
          InputProps={{
            startAdornment: startAdornment && (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ),
            classes: {
              notchedOutline: errorText
                ? classes.notchedOutlineRed
                : classes.notchedOutline,
            },
          }}
        />
        {errorText && <p className={classes.errorText}>{errorText}</p>}
      </>
    )
  );
};

export default TextInput;
