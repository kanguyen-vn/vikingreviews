import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Joi from "joi";
import TextInput from "./common/TextInput";
import StyledButton from "./common/StyledButton";
import DrawerHeader from "./common/DrawerHeader";
import { login } from "../services/authService";

class Login extends Component {
  state = { data: { email: "", password: "" }, errors: {} };

  schema = Joi.object({
    email: Joi.string()
      .regex(/^([a-zA-Z0-9\.]+)@lawrence.edu$/)
      .messages({
        "string.empty": "Email cannot be left empty.",
        "string.pattern.base":
          "Email must be a Lawrence account and can contain only alphanumeric characters, periods, and underscores.",
      }),
    password: Joi.string().min(5).max(32).messages({
      "string.empty": "Password cannot be left empty.",
      "string.min": "Password should have a minimum length of 5.",
      "string.max": "Password should have a maximum length of 32.",
    }),
  });

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

  validate = () => {
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, options);
    if (!error) return null;
    const errors = {};
    error.details.map((item) => {
      errors[item.path[0]] = item.message;
    });
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const { error } = this.schema.validate(obj);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
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
