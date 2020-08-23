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

const About = () => {
  const classes = useStyles();
  return (
    <>
      <DrawerHeader text="About" />
      <p className={classes.p}>
        This project was created by Hikari Miné '20 and Kiet Nguyen '21. We hope
        you like it!
      </p>
      <DrawerHeader text="Contact us" />
      <p className={classes.p}>
        Fill out this form if you want to report incorrect information, report a
        bug, or suggest new features.
      </p>
      <Grid container direction="column" justify="center" spacing={2}>
        <Grid item container direction="column" justify="center">
          <TextInput placeholder="Email" />
        </Grid>
        <Grid item container direction="column" justify="center">
          <TextInput
            placeholder="What do you want us to know about?"
            multiline
          />
        </Grid>
        <Grid item container direction="row" justify="center">
          <StyledButton text="Submit" />
        </Grid>
      </Grid>
    </>
  );
};

export default About;
