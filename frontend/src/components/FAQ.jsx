import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "./common/TextInput";
import StyledButton from "./common/StyledButton";
import DrawerHeader from "./common/DrawerHeader";
import StyledParagraph from "./common/StyledParagraph";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import StyledAccordion from "./common/StyledAccordion";
import { Typography } from "@material-ui/core";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <DrawerHeader text="FAQ" />
      <StyledAccordion
        header="Who are the creators of this project?"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        This project was created by Hikari Miné '20 and Kiet Nguyen '21 in the
        summer of 2020. You can reach out to us using the "Contact us" form.
      </StyledAccordion>
      <StyledAccordion
        header="How can I use the search bar?"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        You can search for a course using the search bar, after which you can
        read all the reviews for that course or add a new one. You can also
        search for courses in a department or those taught by an instructor.
      </StyledAccordion>
      <StyledAccordion
        header="Can I compare courses?"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        We are working on this feature, and will get back to you soon about it!
      </StyledAccordion>
    </>
  );
};

export default FAQ;
