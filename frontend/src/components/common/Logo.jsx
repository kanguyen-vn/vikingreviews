import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import "./Logo.css";

const LogoTypography = withStyles({
  root: {
    fontFamily: "Inter",
    fontWeight: "700",
    color: "#59b4fe",
    textShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
    margin: "0 0 10px 0",
  },
})(Typography);

const Logo = () => {
  return (
    <LogoTypography variant="h2">Viking Reviews</LogoTypography>
    //<div className="logo">Viking Reviews</div>
  );
};

export default Logo;
