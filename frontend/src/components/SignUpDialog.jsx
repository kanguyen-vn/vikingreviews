import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  FilledInput,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  ListItemText,
  Checkbox,
  makeStyles,
  useTheme
} from "@material-ui/core";
import { Visibility, VisibilityOff, SignalCellularConnectedNoInternet0Bar } from "@material-ui/icons";

const SignUpDialog = ({ onClose, openState }) => {

  // password stuff
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

  // majors stuff

  const majors = [
    "Computer Science",
    "English",
    "Physics",
    "Economics",
    "Music"
  ]

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));

  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };


  // class year stuff
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
          label="Password"
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
          fullWidth
        />

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="string"
          fullWidth
        />

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-name-label">Major(s)</InputLabel>
          <Select
            labelId="demo-mutiple-name-label"
            id="demo-mutiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            input={<Input />}
            MenuProps={MenuProps}
            fullWidth
          >
            {majors.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={personName}
          onChange={handleChange}
          multiple
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

        {/* <TextField
          autoFocus
          margin="dense"
          id="classOf"
          label="Class of"
          type="number"
          fullWidth
        /> */}
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
