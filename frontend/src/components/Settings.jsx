import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextInput from "./common/TextInput";
import StyledButton from "./common/StyledButton";
import DrawerHeader from "./common/DrawerHeader";
import StyledAccordion from "./common/StyledAccordion";

const Settings = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <DrawerHeader text="Settings" />
      <StyledAccordion
        header="Change your password"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <TextInput placeholder="test" />
      </StyledAccordion>
      <StyledAccordion
        header="Change your basic information"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        You can search for a course using the search bar, after which you can
        read all the reviews for that course or add a new one. You can also
        search for courses in a department or those taught by an instructor.
      </StyledAccordion>
    </>
  );
};

export default Settings;
