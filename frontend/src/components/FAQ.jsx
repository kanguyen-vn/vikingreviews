import React from "react";
import Grid from "@material-ui/core/Grid";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "./common/TextInput";
import StyledButton from "./common/StyledButton";
import DrawerHeader from "./common/DrawerHeader";

const useStyles = makeStyles(() => ({
  p: {
    fontStyle: "italic",
    color: grey[800],
  },
}));

const FAQ = () => {
  const classes = useStyles();
  return (
    <>
      <DrawerHeader text="FAQ" />
      <p className={classes.p}>
        This project was created by Hikari Miné '20 and Kiet Nguyen '21. We hope
        you like it!
      </p>
    </>
  );
};

export default FAQ;
