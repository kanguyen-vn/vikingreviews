import React from "react";
import { makeStyles, TextField, InputAdornment, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TextLoop from "react-text-loop";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className="home">
      <Grid
        container
        className="App"
        justify="center"
        alignItems="center"
        direction="column"
      >
        <p className="intro">
          Search by{" "}
          {
            <TextLoop className="searchBy">
              <span>department:</span>
              <span>course:</span>
              <span>professor:</span>
            </TextLoop>
          }
        </p>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </div>
  );
};

export default Home;
