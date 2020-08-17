import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LogInDialog from "./LogInDialog";
import SignUpDialog from "./SignUpDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  barStyles: {
    backgroundColor: "#1769aa",
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();

  const [openLogIn, setOpenLogIn] = React.useState(false);
  const [openSignUp, setOpenSignUp] = React.useState(false);

  const handleOpen = (type) => () => {
    if (type === "logIn") setOpenLogIn(true);
    else setOpenSignUp(true);
  };

  const handleClose = (type) => () => {
    if (type === "logIn") setOpenLogIn(false);
    else setOpenSignUp(false);
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.barStyles}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Viking Reviews
          </Typography>
          <Button color="inherit" onClick={handleOpen("logIn")}>
            Login
          </Button>
          <LogInDialog onClose={handleClose("logIn")} openState={openLogIn} />
          <Button color="inherit" onClick={handleOpen("signUp")}>
            Sign Up
          </Button>
          <SignUpDialog
            onClose={handleClose("signUp")}
            openState={openSignUp}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
