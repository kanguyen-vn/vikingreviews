import React, { Component } from "react";
import TextInput from "./common/TextInput";
import Grid from "@material-ui/core/Grid";
import StyledButton from "./common/StyledButton";
import DrawerHeader from "./common/DrawerHeader";
import { register } from "../services/userService";
import { signUpSchema } from "../utils/validationSchemas";
import { validate, validateProperty, handleChange } from "../utils/validation";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: "",
        name: "",
        major: "",
        class: null,
      },
      errors: {},
    };
    this.schema = signUpSchema;
    this.validate = validate.bind(this);
    this.validateProperty = validateProperty.bind(this);
    this.handleChange = handleChange.bind(this);
  }

  handleSubmit = async () => {
    try {
      const response = await register(this.state.data);
      localStorage.setItem("token", response.headers["x-auth-token"]);
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
        <DrawerHeader text="Sign Up" />
        <Grid container direction="column" spacing={2}>
          <Grid item container direction="column" justify="center">
            <TextInput
              placeholder="Email"
              name="email"
              defaultValue=""
              onChange={this.handleChange}
              errorText={errors && errors.email ? errors.email : null}
              autoFocus
            />
          </Grid>
          <Grid item container direction="column" justify="center">
            <TextInput
              placeholder="Password"
              name="password"
              defaultValue=""
              onChange={this.handleChange}
              errorText={errors && errors.password ? errors.password : null}
              password
            />
          </Grid>
          <Grid item container direction="column" justify="center">
            <TextInput
              placeholder="Name"
              name="name"
              defaultValue=""
              onChange={this.handleChange}
              errorText={errors && errors.name ? errors.name : null}
            />
          </Grid>
          <Grid item container direction="column" justify="center">
            <TextInput
              placeholder="Major(s), minor(s)"
              name="major"
              defaultValue=""
              onChange={this.handleChange}
              errorText={errors && errors.major ? errors.major : null}
            />
          </Grid>
          <Grid item container direction="column" justify="center">
            <TextInput
              startAdornment="Class of "
              name="class"
              defaultValue=""
              onChange={this.handleChange}
              errorText={errors && errors.class ? errors.class : null}
            />
          </Grid>
          <Grid item container direction="row" justify="center">
            <StyledButton
              text="Sign Up"
              disabled={
                (this.validate() ? true : false) ||
                Object.keys(errors).length !== 0
              }
              onClick={this.handleSubmit}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default SignUp;
