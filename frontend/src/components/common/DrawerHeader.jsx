import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.palette.secondary.light,
    margin: "0 0 10px 0",
    fontWeight: "300",
    fontStyle: "italic",
    allVariants: {
      textShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
    },
  },
}));

const DrawerHeader = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.header} variant="h2">
      {text}
    </Typography>
  );
};

export default DrawerHeader;
