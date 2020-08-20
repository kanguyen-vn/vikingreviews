import React from "react";
import { TextField, Fade, Slide, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import {
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
  faHeart,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  textFieldPosition: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(12),
  },
  textField: {
    background: "white",
    boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
    fontStyle: "italic",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white",
  },
}));

const guestActions = [
  { icon: <FontAwesomeIcon icon={faSignInAlt} />, name: "Login" },
  { icon: <FontAwesomeIcon icon={faUserPlus} />, name: "Signup" },
  { icon: <FontAwesomeIcon icon={faHeart} />, name: "About" },
];

const memberActions = [
  { icon: <FontAwesomeIcon icon={faCog} />, name: "Settings" },
  { icon: <FontAwesomeIcon icon={faSignOutAlt} />, name: "Logout" },
  { icon: <FontAwesomeIcon icon={faHeart} />, name: "About" },
];

const MenuButton = ({ token, home = false }) => {
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (open) setOpen(false);
  };

  const actions = token ? memberActions : guestActions;
  const classes = useStyles();
  return (
    <>
      {!home && (
        <Slide in={open} direction="down" mountOnEnter>
          <TextField
            className={classes.textFieldPosition}
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              className: classes.textField,
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
        </Slide>
      )}
      <SpeedDial
        ariaLabel="Menu"
        className={classes.speedDial}
        hidden={hidden}
        icon={<MenuIcon />}
        openIcon={<CloseIcon />}
        onOpen={handleOpen}
        onClick={handleClick}
        direction="down"
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default MenuButton;
