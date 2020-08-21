import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontFamily: "Inter",
    fontWeight: "700",
    color: "#59b4fe",
    textShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
    margin: "0 0 10px 0",
  },
});

const Logo = () => {
  const classes = useStyles();
  return (
    <Typography variant="h2" className={classes.root}>
      Viking Reviews
    </Typography>
  );
};

export default Logo;
