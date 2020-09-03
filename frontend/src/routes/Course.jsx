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
  state = { reviews: [] };
  async componentDidMount() {
    const courseId = this.props.match.params.id;
    console.log(courseId);
    const data = await reviews.getById(courseId);
    // console.log('data!!!!!!');
    // console.log(data);
    this.setState({ reviews: data });
  }

  render() {
    const { classes, user, draw, ...other } = this.props;
    const detail = other.location.state
      ? other.location.state.detail
      : courses.getById(other.match.params.id);
    console.log('detail!!!!!!!!');
    console.log(detail);
    if (!user) {
      return (<LoginError draw={draw} {...other} />);
    } else {

      const reviews = this.state.reviews;

      console.log('data!!!!!!!!!');
      console.log(this.state.reviews);

      return (
        <Grid>
          {reviews.map((review) => (
            <Typography>
              {review.content[0]}
            </Typography>
          ))}
        </Grid>

      );
    }
  }
}

export default withStyles(useStyles)(Course);
