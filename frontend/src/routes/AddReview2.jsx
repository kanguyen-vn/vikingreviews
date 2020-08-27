import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ErrorIcon from "@material-ui/icons/Error";
import StyledButton from "../components/common/StyledButton";
import Login from "./../components/Login";
import DrawerHeader from "../components/common/DrawerHeader";
import StyledAccordion from "../components/common/StyledAccordion";
import SearchBar from "../components/SearchBar";
import LoginError from "../components/LoginError";

const useStyles = (theme) => ({
  pageStyles: {
    height: "100vh",
    background: theme.palette.secondary.main,
  },
  paperStyles: {
    height: "85vh",
    // background: "white",
    // boxShadow: theme.shadows[10],
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
});

class AddReview2 extends Component {
  state = { expanded: "" };

  handleChange = (panel) => (event, newExpanded) => {
    this.setState({ expanded: newExpanded ? panel : false });
  };

  render() {
    const { classes, user, draw, ...other } = this.props;
    const { expanded } = this.state;
    return (
      (!user && <LoginError draw={draw} {...other} />) || (
        <Grid
          container
          className={classes.pageStyles}
          justify="center"
          alignItems="center"
          direction="row"
        >
          <Grid
            item
            xs={11}
            sm={8}
            container
            className={classes.paperStyles}
            justify="center"
            alignItems="center"
            direction="column"
          >
            <DrawerHeader primary>Add a Review</DrawerHeader>
            <StyledAccordion
              header="Course Information"
              expanded={expanded === "panel1"}
              onChange={this.handleChange("panel1")}
            >
              This project was created by Hikari Miné '20 and Kiet Nguyen '21 in
              the summer of 2020. You can reach out to us using the "Contact us"
              form.
            </StyledAccordion>
            <StyledAccordion
              header="Workload"
              expanded={expanded === "panel2"}
              onChange={this.handleChange("panel2")}
            >
              This project was created by Hikari Miné '20 and Kiet Nguyen '21 in
              the summer of 2020. You can reach out to us using the "Contact us"
              form.
            </StyledAccordion>
            <StyledAccordion
              header="Professor"
              expanded={expanded === "panel3"}
              onChange={this.handleChange("panel3")}
            >
              This project was created by Hikari Miné '20 and Kiet Nguyen '21 in
              the summer of 2020. You can reach out to us using the "Contact us"
              form.
            </StyledAccordion>
            <StyledAccordion
              header="Review"
              expanded={expanded === "panel4"}
              onChange={this.handleChange("panel4")}
            >
              This project was created by Hikari Miné '20 and Kiet Nguyen '21 in
              the summer of 2020. You can reach out to us using the "Contact us"
              form.
            </StyledAccordion>
          </Grid>
        </Grid>
      )
    );
  }
}

export default withStyles(useStyles)(AddReview2);

// const NotFound = () => {
//   const classes = useStyles();
//   const history = useHistory();
//   return (
//     <Grid
//       container
//       className={classes.pageStyles}
//       justify="center"
//       alignItems="center"
//       direction="row"
//     >
//       <Grid
//         item
//         xs={10}
//         sm={8}
//         md={6}
//         lg={4}
//         container
//         className={classes.paperStyles}
//         justify="center"
//         alignItems="center"
//         direction="column"
//       >
//         <Typography className={classes.notFound} variant="h4">
//           This page has been taken over by river bugs.
//         </Typography>
//         <Grid container type="row" justify="center">
//           <ErrorIcon className={classes.errorIcon} />
//         </Grid>
//         <StyledButton text="Back to Home" onClick={() => history.push("/")} />
//       </Grid>
//     </Grid>
//   );
// };

// export default NotFound;
