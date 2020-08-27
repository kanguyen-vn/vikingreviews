import React, { Component } from "react";
import DrawerHeader from "./common/DrawerHeader";
import StyledAccordion from "./common/StyledAccordion";
import ScrollableGrid from "./common/ScrollableGrid";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <ScrollableGrid>
        <DrawerHeader>FAQ</DrawerHeader>
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
          We are working on this feature, and will get back to you soon about
          it!
        </StyledAccordion>
      </ScrollableGrid>
    </>
  );
};

export default FAQ;
