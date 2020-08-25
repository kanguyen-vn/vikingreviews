import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = () => ({
  p: {
    fontStyle: "italic",
    color: grey[800],
  },
  pClickable: {
    fontStyle: "italic",
    color: grey[800],
    cursor: "pointer",
    textDecoration: "underline",
  },
});

class StyledParagraph extends Component {
  render() {
    const { classes, children, onClick } = this.props;
    if (onClick)
      return (
        <p className={classes.pClickable} onClick={onClick}>
          {children}
        </p>
      );
    return <p className={classes.p}>{children}</p>;
  }
}

export default withStyles(useStyles)(StyledParagraph);
