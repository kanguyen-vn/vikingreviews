import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import { grey } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  margin: {
    //margin: theme.spacing(1),
    margin: "10px 0 0 0",
  },
  pageStyles: {
    height: "100vh",
    background: theme.palette.secondary.main,
  },
  paperStyles: {
    height: "70vh",
    background: "white",
    boxShadow: "10px 10px 0px 0px rgba(0,0,0,0.15)",
    borderRadius: 16,
  },
  notFound: {
    padding: "0 50px 0 50px",
    textAlign: "center",
    fontWeight: 300,
    fontStyle: "italic",
    color: theme.palette.secondary.dark,
  },
  button: {
    boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
    fontFamily: "Inter",
    fontWeight: 300,
  },
  errorIcon: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "100px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "200px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "300px",
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();
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
          This page has been taken over by river bugs.
        </Typography>
        <Grid container type="row" justify="center">
          <ErrorIcon className={classes.errorIcon} />
        </Grid>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          size="large"
          onClick={() => history.push("/")}
        >
          Back to Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFound;
