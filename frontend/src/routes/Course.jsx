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

const useStyles = (theme) => ({
  pageStyles: {
    height: "100vh",
    background: theme.palette.secondary.main,
  },
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
      console.log('this.state');
      console.log(this.state);
    
      const reviewsList = this.state.reviewsList;
      const courseTitle = this.state.detail ? this.state.detail.title : null;
      const courseNumber = this.state.detail ? this.state.detail.number : null;

      const departmentCode = this.state.detail ? this.state.detail.department.code : null;
      const departmentName = this.state.detail ? this.state.detail.department.name : null;

      console.log(courseTitle);
      console.log(courseNumber);
      console.log(departmentCode);
      console.log(departmentName);
      console.log(this.state);

      return (
        <Grid>
          <Grid>
            <Typography>
              Course Title: {courseTitle}
            </Typography>
            <Typography>
            Course Number: {courseNumber}
            </Typography>
            <Typography>

            </Typography>
          </Grid>
          <Grid>
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
