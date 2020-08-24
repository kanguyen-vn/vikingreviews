import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextInput from "./common/TextInput";
import StyledButton from "./common/StyledButton";
import DrawerHeader from "./common/DrawerHeader";
import { login } from "../services/authService";
import { loginSchema } from "../utils/validationSchemas";
import { validate, validateProperty, handleChange } from "../utils/validation";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { email: "", password: "" }, errors: {} };
    this.schema = loginSchema;
    this.validate = validate.bind(this);
    this.validateProperty = validateProperty.bind(this);
    this.handleChange = handleChange.bind(this);
  }

  handleSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: jwt } = await login(data.email, data.password);
      localStorage.setItem("token", jwt);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <DrawerHeader text="Login" />
        <Grid item container direction="column" justify="center" spacing={2}>
          <Grid item container direction="column" justify="center">
            <TextInput
              placeholder="Email"
              name="email"
              autoFocus
              defaultValue=""
              onChange={this.handleChange}
              errorText={errors && errors.email ? errors.email : null}
            />
          </Grid>
          <Grid item container direction="column" justify="center">
            <TextInput
              placeholder="Password"
              name="password"
              password
              defaultValue=""
              onChange={this.handleChange}
              errorText={errors && errors.password ? errors.password : null}
            />
          </Grid>
          <Grid item container direction="row" justify="center">
            <StyledButton
              text="Log in"
              disabled={this.validate() ? true : false}
              onClick={this.handleSubmit}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Login;
