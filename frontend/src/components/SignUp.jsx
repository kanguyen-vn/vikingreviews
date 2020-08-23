import React, { Component } from "react";
import TextInput from "./common/TextInput";
import Grid from "@material-ui/core/Grid";
import StyledButton from "./common/StyledButton";
import DrawerHeader from "./common/DrawerHeader";
import Joi from "joi";

const maxYear = new Date().getFullYear() + 5;

class SignUp extends Component {
  state = {
    data: {
      email: "",
      password: "",
      name: "",
      major: "",
      class: null,
    },
    errors: {},
  };

  schema = Joi.object({
    email: Joi.string()
      .regex(/^([a-zA-Z0-9_\.]+)@lawrence.edu$/)
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
    name: Joi.string().max(32).messages({
      "string.max": "Name should have a maximum length of 32.",
      "string.empty": "Name cannot be left empty.",
    }),
    major: Joi.string()
      .regex(/^[a-zA-Z,\s]+$/)
      .messages({
        "string.pattern.base":
          "Major(s), minor(s) can only contain letters, commas, and spaces.",
        "string.empty": "Major(s), minor(s) cannot be left empty.",
      }),
    class: Joi.number()
      .min(1847)
      .max(maxYear)
      .messages({
        "number.min": "Class year needs to be greater than or equal to 1847.",
        "number.max": `Class year needs to be no greater than ${maxYear}.`,
        "number.base": `Class year has to be a number between 1847 and ${maxYear}.`,
        "number.empty": "Class year cannot be left empty.",
      }),
  });

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

  handleSubmit = () => {
    const errors = this.validate();
    this.setState({ errors });
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
              disabled={this.validate() ? true : false}
              onClick={this.handleSubmit}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default SignUp;
