import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import ErrorIcon from "@material-ui/icons/Error";
import StyledButton from "../components/common/StyledButton";
import Login from "../components/Login";
import DrawerHeader from "../components/common/DrawerHeader";
import StyledAccordion from "../components/common/StyledAccordion";
import SearchBar from "../components/SearchBar";
import LoginError from "../components/LoginError";
import ScrollableGrid from "../components/common/ScrollableGrid";
import AddReview from "../components/AddReview";
import courses from "../services/courseService";
import { Typography } from "@material-ui/core";
import reviews from "../services/reviewService";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import { Paper } from '@material-ui/core';
import grey from "@material-ui/core/colors/grey";


const useStyles = (theme) => ({
  pageStyles: {
    height: "100vh",
    weight: "100vh",
    background: theme.palette.secondary.main,
  },
  courseGrid: {
    height: "90vh",
    weight: "90vh",
    background: "white",
    borderRadius: 16,
  },
  reviewGrid: {
    height: "90vh",
    weight: "90vh",
    background: "white",
    borderRadius: 16,
    margin: theme.spacing(2),
  },
  courseDetails: {
    height: "80vh"
  },
  sectionStyle: {
  },
  sectionHeaderStyle: {},
  sectionScoresStyle: {},
  scoreStyle: {
    background: theme.palette.secondary.main,
    borderRadius: 8,
    margin: theme.spacing(1),
  },
  scoreNumberStyle: {
    // background: 'white',
    // borderRadius: 3,
    // margin: theme.spacing(1),
  }
});

class Course extends Component {
  state = {
    reviewsList: [],
    detail: null,
  };

  async componentDidMount() {
    const courseId = this.props.match.params.id;
    console.log('courseId');
    console.log(courseId);
    const detail = this.props.location.state
      ? this.props.location.state.detail
      : await courses.getById(this.props.match.params.id);
    const reviewsList = await reviews.getByCourse(courseId);
    this.setState({ detail, reviewsList });
  }

  render() {
    const { classes, user, draw, ...other } = this.props;
    if (!user) {
      return <LoginError draw={draw} {...other} />;
    } else {
      const reviewsList = this.state.reviewsList;
      const courseTitle = this.state.detail ? this.state.detail.left : null;
      const courseNumber = this.state.detail ? this.state.detail.right : null;

      return (
        <Grid
          container
          className={classes.pageStyles}
          justify="center"
          alignItems="center"
          direction="row"

        >
          <Grid
            xs={11}
            md={2}
            container
            item
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.courseGrid}
          >
            {/* <Grid
              xs={10}
              container
              item
              // direction="column"
              // justify="center"
              className={classes.courseDetails}
            > */}
            <Grid
              xs={11}
              item
              container
              className={classes.courseDetails}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid
                xs={12}
                item
              >
                <Typography variant="h4">
                  {courseTitle}
                </Typography>
              </Grid>

              <Grid
                xs={12}
                item>
                <Typography variant="h4">
                  {courseNumber}
                </Typography>
              </Grid>
              <Grid
                xs={12}
                item
                container
                direction="row"
                justify="space-evenly"
                className={classes.sectionStyle}
                spacing={1}
              >
                <Grid
                  xs={12}
                  item
                >
                  <Typography variant="h5">
                    Workload
                  </Typography>
                </Grid>

                <Grid
                  xs={5}
                  item
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.scoreStyle}>
                  <Grid className={classes.scoreNumberStyle}>
                    <Typography variant="h4">
                      3.4
                  </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      Overall
                  </Typography>
                  </Grid>
                </Grid>
                <Grid
                  xs={5}
                  item
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.scoreStyle}>
                  <Grid className={classes.scoreNumberStyle}>
                    <Typography variant="h4">
                      3.4
                  </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      Overall
                  </Typography>
                  </Grid>
                </Grid>
                <Grid
                  xs={5}
                  item
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.scoreStyle}>
                  <Grid className={classes.scoreNumberStyle}>
                    <Grid>
                      <Typography variant="h4">
                        3.4
                      </Typography>
                    </Grid>

                  </Grid>
                  <Grid>
                    <Typography>
                      Overall
                  </Typography>
                  </Grid>
                </Grid>
                <Grid
                  xs={5}
                  item
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.scoreStyle}>
                  <Grid className={classes.scoreNumberStyle}>
                    <Typography variant="h4">
                      3.4
                  </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      Overall
                  </Typography>
                  </Grid>
                </Grid>

              </Grid>




            </Grid> </Grid>

          {/* </Grid> */}

          <Grid
            xs={11}
            md={8}
            className={classes.reviewGrid}
          >
            {reviewsList.map((review) => (
              <Typography>{review.content[0]}</Typography>
            ))}
          </Grid>
        </Grid>

      );
    }
  }
}

export default withStyles(useStyles)(Course);
