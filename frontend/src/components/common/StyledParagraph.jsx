import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = () => ({
  p: {
    fontStyle: "italic",
    //color: grey[800],
  },
  pClickable: {
    fontStyle: "italic",
    //color: grey[800],
    cursor: "pointer",
    textDecoration: "underline",
  },
});

class StyledParagraph extends Component {
  render() {
    const { classes, children, onClick, color = grey[800] } = this.props;
    if (onClick)
      return (
        <p className={classes.pClickable} onClick={onClick} style={{ color }}>
          {children}
        </p>
      );
    return (
      <p className={classes.p} style={{ color }}>
        {children}
      </p>
    );
  }
}

export default withStyles(useStyles)(StyledParagraph);
