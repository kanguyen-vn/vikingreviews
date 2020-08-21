import React from "react";
import { TextField, Grid, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import Logo from "../components/common/Logo";
import grey from "@material-ui/core/colors/grey";
import SearchBar from "../components/SearchBar";

const useStyles = makeStyles((theme) => ({
  margin: {
    //margin: theme.spacing(1),
    margin: "10px 0 0 0",
  },
  pageStyles: {
    height: "100vh",
    background: theme.palette.secondary.main,
  },
  header: {
    textAlign: "center",
  },
  textField: {
    background: "white",
    boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
    fontStyle: "italic",
  },
  button: {
    boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
    fontFamily: "Inter",
    fontWeight: "300",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white",
  },
  p: {
    textAlign: "center",
    fontStyle: "italic",
    color: grey[600],
    fontSize: "85%",
  },
}));

const Home = () => {
  const classes = useStyles();
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
        sm={4}
        container
        justify="center"
        alignItems="stretch"
        direction="column"
      >
        <div className={classes.header}>
          <Logo />
        </div>
        <div width="inherit">
          <SearchBar home={true} />
        </div>

        <p className={classes.p}>...or type "All" to compare all courses!</p>
        <Grid container type="row" justify="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            size="large"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
