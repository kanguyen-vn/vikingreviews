import React from "react";
import Slide from "@material-ui/core/Slide";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import {
  faArrowRight,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
  faHeart,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./SearchBar";
import SlideInDrawer from "./SlideInDrawer";
import Login from "./Login";
import SignUp from "./SignUp";
import About from "./About";
import Settings from "./Settings";

const shadow = (px) => ({
  boxShadow: `${px}px ${px}px 0px 0px rgba(0,0,0,0.15)`,
});

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  textField: {
    background: "white",
    fontStyle: "italic",
    ...shadow(4),
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white",
  },
}));

const guestActions = [
  {
    icon: <FontAwesomeIcon icon={faArrowRight} />,
    name: "Search",
    highlighted: true,
    action: null,
  },
  {
    icon: <FontAwesomeIcon icon={faSignInAlt} />,
    name: "Login",
    highlighted: false,
    action: <Login />,
  },
  {
    icon: <FontAwesomeIcon icon={faUserPlus} />,
    name: "Sign Up",
    highlighted: false,
    action: <SignUp />,
  },
  {
    icon: <FontAwesomeIcon icon={faHeart} />,
    name: "About",
    highlighted: false,
    action: <About />,
  },
];

const memberActions = [
  {
    icon: <FontAwesomeIcon icon={faArrowRight} />,
    name: "Search",
    highlighted: true,
    action: null,
  },
  {
    icon: <FontAwesomeIcon icon={faCog} />,
    name: "Settings",
    highlighted: false,
    action: <Settings />,
  },
  {
    icon: <FontAwesomeIcon icon={faSignOutAlt} />,
    name: "Logout",
    highlighted: false,
    action: null,
  },
  {
    icon: <FontAwesomeIcon icon={faHeart} />,
    name: "About",
    highlighted: false,
    action: <About />,
  },
];

const Menu = ({ token, home = false }) => {
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [drawerContent, setDrawerContent] = React.useState(<></>);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (open) setOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const handleActionClick = (action) => () => {
    if (action) {
      setDrawerContent(action);
      toggleDrawer(true)();
    }
  };

  const theme = useTheme();
  const actions = token ? memberActions : guestActions;
  const classes = useStyles();
  return (
    <>
      {!home && (
        <Slide in={open} direction="down" mountOnEnter unmountOnExit>
          <SearchBar home={false} />
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
        FabProps={{ style: shadow(5) }}
      >
        {actions.map(
          (action) =>
            !(home && action.highlighted) && (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={handleActionClick(action.action)}
                FabProps={{
                  style: action.highlighted
                    ? {
                        backgroundColor: theme.palette.secondary.dark,
                        color: "white",
                        ...shadow(4),
                      }
                    : shadow(4),
                }}
              />
            )
        )}
      </SpeedDial>
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <SlideInDrawer onClose={toggleDrawer(false)} content={drawerContent} />
      </Drawer>
    </>
  );
};

export default Menu;
