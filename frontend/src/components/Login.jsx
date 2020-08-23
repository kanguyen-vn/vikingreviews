import React from "react";
import Grid from "@material-ui/core/Grid";
import TextInput from "./common/TextInput";
import StyledButton from "./common/StyledButton";
import DrawerHeader from "./common/DrawerHeader";

const Login = () => {
  return (
    <>
      <DrawerHeader text="Login" />
      <Grid container direction="column" justify="center" spacing={2}>
        <Grid item container direction="column" justify="center">
          <TextInput placeholder="Email" autoFocus />
        </Grid>
        <Grid item container direction="column" justify="center">
          <TextInput placeholder="Password" password />
        </Grid>
        <Grid item container direction="row" justify="center">
          <StyledButton text="Log in" />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
