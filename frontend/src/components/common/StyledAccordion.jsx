import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import StyledParagraph from "./StyledParagraph";

const useStyles = (theme) => ({
  accordion: {
    boxShadow: "7px 7px 0px rgba(0,0,0,0.15)",
  },
  header: {
    backgroundColor: theme.palette.primary.light,
    // backgroundColor: "white",
    fontSize: "120%",
  },
});

class StyledAccordion extends Component {
  render() {
    const { classes, children, header, expanded, onChange } = this.props;
    return (
      <Accordion
        square
        className={classes.accordion}
        expanded={expanded}
        onChange={onChange}
      >
        <AccordionSummary
          className={classes.header}
          expandIcon={<ExpandMoreIcon />}
        >
          <StyledParagraph color="white">{header}</StyledParagraph>
        </AccordionSummary>
        <AccordionDetails>
          <StyledParagraph>{children}</StyledParagraph>
        </AccordionDetails>
      </Accordion>
    );
  }
}

export default withStyles(useStyles)(StyledAccordion);
