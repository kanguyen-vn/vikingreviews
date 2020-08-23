import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ErrorIcon from "@material-ui/icons/Error";
import { useHistory } from "react-router-dom";
import StyledButton from "../components/common/StyledButton";

const useStyles = makeStyles((theme) => ({
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
        <StyledButton text="Back to Home" onClick={() => history.push("/")} />
      </Grid>
    </Grid>
  );
};

export default NotFound;
