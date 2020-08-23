import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { grey, red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import TextInput from "./common/TextInput";
import StyledButton from "./common/StyledButton";
import DrawerHeader from "./common/DrawerHeader";
import Joi from "joi";

const useStyles = () => ({
  p: {
    fontStyle: "italic",
    color: grey[800],
  },
  counter: {
    fontStyle: "italic",
    color: grey[800],
    textAlign: "right",
    margin: "0 0 5px 0",
    fontSize: "85%",
  },
});

const maxComment = 500;

class ContactUs extends Component {
  state = { data: { email: "", comment: "" }, errors: {} };

  schema = Joi.object({
    email: Joi.string()
      .regex(/^([a-zA-Z0-9_\.]+)@lawrence.edu$/)
      .messages({
        "string.empty": "Email cannot be left empty.",
        "string.pattern.base":
          "Email must be a Lawrence account and can contain only alphanumeric characters, periods, and underscores.",
      }),
    comment: Joi.string()
      .min(10)
      .max(maxComment)
      .messages({
        "string.empty": "Say something :-).",
        "string.min": "Comment should have a minimum length of 10.",
        "string.max": `Comment should have a maximum length of ${maxComment}.`,
      }),
  });

  handleSubmit = () => {
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
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

    console.log(data, errorMessage);
    this.setState({ data, errors });
  };
  render() {
    const { classes } = this.props;
    const { data, errors } = this.state;
    return (
      <>
        <DrawerHeader text="Contact Us" />
        <p className={classes.p}>
          Fill out this form if you want to report incorrect information, report
          a bug, or suggest new features.
        </p>
        <Grid container direction="column" justify="center" spacing={2}>
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
            <p
              className={classes.counter}
              style={{
                color: data.comment.length >= maxComment - 10 && red[300],
              }}
            >{`${maxComment - data.comment.length}/${maxComment}`}</p>
            <TextInput
              placeholder="What do you want us to know about?"
              multiline
              name="comment"
              autoFocus
              defaultValue=""
              onChange={this.handleChange}
              errorText={errors && errors.comment ? errors.comment : null}
            />
          </Grid>
          <Grid item container direction="row" justify="center">
            <StyledButton
              text="Submit"
              disabled={this.validate() ? true : false}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles)(ContactUs);
