import React from "react";
import {
  TextField,
  InputAdornment,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextLoop from "react-text-loop";
import { Autocomplete } from "@material-ui/lab";
import BarChartIcon from "@material-ui/icons/BarChart";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
  pageStyles: {},
  header: {},
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
        sm={6}
        container
        className="lol"
        justify="flex-start"
        alignItems="stretch"
        direction="column"
      >
        <Typography variant="h3" gutterBottom>
          Search by{" "}
          {
            <TextLoop className="searchBy">
              <span>department:</span>
              <span>course:</span>
              <span>professor:</span>
            </TextLoop>
          }
        </Typography>
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
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Button variant="contained" color="primary">
            Search
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<BarChartIcon />}
          >
            See stats
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
