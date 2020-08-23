import React from "react";
import TextInput from "./common/TextInput";
import Grid from "@material-ui/core/Grid";
import StyledButton from "./common/StyledButton";
import DrawerHeader from "./common/DrawerHeader";

const SignUp = () => {
  return (
    <>
      <DrawerHeader text="Sign Up" />
      <Grid container direction="column" spacing={2}>
        <Grid item container direction="column" justify="center">
          <TextInput placeholder="Email" autoFocus />
        </Grid>
        <Grid item container direction="column" justify="center">
          <TextInput placeholder="Password" password />
        </Grid>
        <Grid item container direction="column" justify="center">
          <TextInput placeholder="Name" />
        </Grid>
        <Grid item container direction="column" justify="center">
          <TextInput placeholder="Major(s), minor(s)" />
        </Grid>
        <Grid item container direction="column" justify="center">
          <TextInput startAdornment="Class of " />
        </Grid>
        <Grid item container direction="row" justify="center">
          <StyledButton text="Sign Up" />
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
