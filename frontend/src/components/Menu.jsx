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
  faQuestion,
  faCommentDots,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./SearchBar";
import SlideInDrawer from "./SlideInDrawer";
import Login from "./Login";
import SignUp from "./SignUp";
import FAQ from "./FAQ";
import Settings from "./Settings";
import ContactUs from "./ContactUs";

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
  tooltip: {
    whiteSpace: "nowrap",
    fontSize: "0.8rem",
    borderRadius: 0,
    ...shadow(4),
  },
}));

const Menu = ({ user, home = false }) => {
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
      action: () => draw(user)(Login),
    },
    {
      icon: <FontAwesomeIcon icon={faUserPlus} />,
      name: "Sign Up",
      highlighted: false,
      action: () => draw(user)(SignUp),
    },
    {
      icon: <FontAwesomeIcon icon={faQuestion} />,
      name: "FAQ",
      highlighted: false,
      action: () => draw(user)(FAQ),
    },
    {
      icon: <FontAwesomeIcon icon={faCommentDots} />,
      name: "Contact Us",
      highlighted: false,
      action: () => draw(user)(ContactUs),
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
      action: () => draw(user)(Settings),
    },
    {
      icon: <FontAwesomeIcon icon={faSignOutAlt} />,
      name: "Logout",
      highlighted: false,
      action: () => {
        localStorage.removeItem("token");
        window.location = "/";
      },
    },
    {
      icon: <FontAwesomeIcon icon={faQuestion} />,
      name: "FAQ",
      highlighted: false,
      action: () => draw(user)(FAQ),
    },
    {
      icon: <FontAwesomeIcon icon={faCommentDots} />,
      name: "Contact Us",
      highlighted: false,
      action: () => draw(user)(ContactUs),
    },
  ];

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

  const handleDialClick = () => {
    setOpen(!open);
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

  const toSignUp = () => {
    toggleDrawer(false)();
    setTimeout(() => {
      setDrawerContent(<SignUp />);
      toggleDrawer(true)();
    }, 500);
  };

  const draw = (user) => (Component) => {
    if (user) {
      setDrawerContent(<Component user={user} />);
    } else {
      if (Component === Login)
        setDrawerContent(<Component toSignUp={toSignUp} />);
      else setDrawerContent(<Component />);
    }
    toggleDrawer(true)();
  };

  const handleActionClick = (action) => () => {
    if (action.action) {
      action.action();
    }
  };

  const theme = useTheme();
  const actions = user ? memberActions : guestActions;
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
        onClick={handleDialClick}
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
                onClick={handleActionClick(action)}
                tooltipOpen
                classes={{ staticTooltipLabel: classes.tooltip }}
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
