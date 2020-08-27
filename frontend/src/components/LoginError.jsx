import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ErrorIcon from "@material-ui/icons/Error";
import StyledButton from "../components/common/StyledButton";
import Login from "./../components/Login";

const useStyles = (theme) => ({
  pageStyles: {
    height: "100vh",
    background: theme.palette.secondary.main,
  },
  paperStyles: {
    height: "85vh",
    background: "white",
    boxShadow: theme.shadows[10],
    borderRadius: 16,
  },
  notFound: {
    padding: "0 50px 0 50px",
    textAlign: "center",
    fontWeight: 500,
    fontStyle: "italic",
    color: theme.palette.secondary.dark,
  },
  errorIcon: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "200px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "300px",
    },
  },
});

class LoginError extends Component {
  render() {
    const { classes, draw, ...other } = this.props;
    return (
      <Grid
        container
        className={classes.pageStyles}
        justify="center"
        alignItems="center"
        direction="row"
      >
        <Grid
          item
          xs={10}
          sm={8}
          md={6}
          lg={4}
          container
          className={classes.paperStyles}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Typography className={classes.notFound} variant="h4">
            You have to be logged in to leave a review.
          </Typography>
          <Grid container type="row" justify="center">
            <ErrorIcon className={classes.errorIcon} />
          </Grid>
          <StyledButton text="Log in" onClick={() => draw(other)(Login)} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(LoginError);
