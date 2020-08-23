import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     color: "#59b4fe",
//     margin: "0 0 10px 0",
//     fontWeight: "700",
//   },
// });

const useStyles = (theme) => ({
  root: {
    color: theme.palette.primary.main,
    margin: "0 0 10px 0",
    fontWeight: "700",
    allVariants: {
      textShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
    },
  },
});

class Logo extends Component {
  render() {
    return (
      <Typography variant="h2" className={this.props.classes.root}>
        Viking Reviews
      </Typography>
    );
  }
}

// const Logo = () => {
//   const classes = useStyles();
//   return (
//     <Typography variant="h2" className={classes.root}>
//       Viking Reviews
//     </Typography>
//   );
// };

export default withStyles(useStyles)(Logo);
