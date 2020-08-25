import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextInput from "./common/TextInput";
import StyledButton from "./common/StyledButton";
import DrawerHeader from "./common/DrawerHeader";

class Settings extends Component {
  render() {
    return (
      <>
        <DrawerHeader text="Settings" />
      </>
    );
  }
}

export default Settings;
