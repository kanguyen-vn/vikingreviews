import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class ScrollableGrid extends Component {
  render() {
    return (
      <Grid
        item
        xs={10}
        sm={6}
        container
        direction="column"
        justify="center"
        wrap="nowrap"
        style={{
          height: "80%",
          width: "100%",
          overflow: "auto",
          padding: "10px",
        }}
      >
        {this.props.children}
      </Grid>
    );
  }
}

export default ScrollableGrid;
