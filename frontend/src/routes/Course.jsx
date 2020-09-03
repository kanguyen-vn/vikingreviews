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

const useStyles = (theme) => ({
  pageStyles: {
    height: "100vh",
    background: theme.palette.secondary.main,
  },
});

class Course extends Component {
  state = {reviews: [] };
  async componentDidMount(){
    const courseId = this.props.match.params.id;
    const data = await reviews.getById(courseId);
    this.setState({ reviews: data });
  }
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     user: null,
  //     reviews: []
  //   };
  //   this.getCourseById = this.getCourseById.bind(this);
  //   console.log('*************************************************');
  //   console.log(props);
  //   console.log('*************************************************');
  // };
  
  // async getCourseById(){
  //   const courseId = this.props.match.params.id;
  //   const Reviews = await reviews.getById(courseId);
  //   console.log(Reviews);
  //   this.setState({Reviews});
  // }

  // async componentDidMount() {
  //   const user = auth.currentUser();
  //   this.setState({ user });
  //   await this.getCourseById(true);
  // }

  render() {
    const { classes, user, draw, ...other } = this.props;
    const detail = other.location.state
      ? other.location.state.detail
      : courses.getById(other.match.params.id);
    console.log(detail);
    return (
      (!user && <LoginError draw={draw} {...other} />) || (
        <Grid
          container
          className={classes.pageStyles}
          justify="center"
          alignItems="center"
        >
          <Grid>
            <Typography>
              {detail.left}
            </Typography>
            <Typography>
              {detail.right}
            </Typography>
          </Grid>
          {/* <Typography>{other.match.params.id}</Typography> */}
          <StyledButton
            onClick={() => draw({ detail, ...other })(AddReview)}
            text="Add Review"
          />
        </Grid>
      )
    );
  }
}

export default withStyles(useStyles)(Course);
