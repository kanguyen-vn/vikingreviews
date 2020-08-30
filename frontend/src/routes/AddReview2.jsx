import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ErrorIcon from "@material-ui/icons/Error";
import StyledButton from "../components/common/StyledButton";
import Login from "./../components/Login";
import DrawerHeader from "../components/common/DrawerHeader";
import StyledAccordion from "../components/common/StyledAccordion";
import SearchBar from "../components/SearchBar";
import LoginError from "../components/LoginError";
import ScrollableGrid from "../components/common/ScrollableGrid";

const useStyles = (theme) => ({
  pageStyles: {
    height: "100vh",
    background: theme.palette.secondary.main,
  },
  column: {
    height: "85vh",
    width: "48%",
  },
  within: {
    background: "white",
    boxShadow: theme.shadows[10],
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  withinHighlighted: {
    background: theme.palette.primary.light,
    boxShadow: theme.shadows[10],
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  topLeft: {
    padding: "10px",
    height: "30%",
  },
  bottomLeft: {
    padding: "10px",
    height: "70%",
  },
  topRight: {
    padding: "10px",
    height: "40%",
  },
  bottomRight: {
    padding: "10px",
    height: "60%",
  },
  prompt: {
    [theme.breakpoints.down("md")]: {
      height: theme.typography.h6.fontSize * 2,
    },
    [theme.breakpoints.up("lg")]: {
      height: theme.typography.h5.fontSize * 2,
    },
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "10px 10px 0 0",
  },
  header: {
    color: theme.palette.secondary.light,
    // margin: "0 0 10px 0",
    fontWeight: "300",
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
});

class AddReview2 extends Component {
  render() {
    const { classes, user, draw, ...other } = this.props;
    return (
      (!user && <LoginError draw={draw} {...other} />) || (
        <Grid
          container
          className={classes.pageStyles}
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={11}
            sm={8}
            container
            justify="space-between"
            alignItems="center"
            style={{ overflow: "auto", height: "85vh" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              className={classes.column}
              direction="column"
              justify="space-between"
            >
              <Grid
                item
                container
                className={classes.topLeft}
                justify="center"
                alignItems="center"
              >
                <Grid
                  container
                  className={classes.withinHighlighted}
                  direction="column"
                >
                  <Grid
                    item
                    container
                    className={classes.prompt}
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography className={classes.header}>COURSE</Typography>
                    </Grid>
                  </Grid>
                  <ScrollableGrid>
                    <SearchBar types={["Course"]} inherit />
                  </ScrollableGrid>
                </Grid>
              </Grid>
              <Grid
                item
                container
                className={classes.bottomLeft}
                justify="center"
                alignItems="center"
              >
                <Grid container className={classes.within} direction="column">
                  <Grid
                    item
                    container
                    className={classes.prompt}
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography className={classes.header}>
                        PROFESSOR
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              className={classes.column}
              direction="column"
              justify="space-between"
            >
              <Grid
                item
                container
                className={classes.topRight}
                justify="center"
                alignItems="center"
              >
                <Grid container className={classes.within} direction="column">
                  <Grid
                    item
                    container
                    className={classes.prompt}
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography className={classes.header}>
                        WORKLOAD
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                container
                className={classes.bottomRight}
                justify="center"
                alignItems="center"
              >
                <Grid container className={classes.within} direction="column">
                  <Grid
                    item
                    container
                    className={classes.prompt}
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography className={classes.header}>REVIEW</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )
    );
  }
}

export default withStyles(useStyles)(AddReview2);
