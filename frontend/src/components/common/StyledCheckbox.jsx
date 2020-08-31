import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    fontStyle: "italic",
    color: theme.palette.secondary.dark,
  },
  labelChecked: {
    fontStyle: "italic",
    color: theme.palette.primary.dark,
  },
}));

const StyledCheckbox = ({ checked, name, onChange, label }) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          name={name}
          color="primary"
        />
      }
      label={label}
      classes={{
        label: checked ? classes.labelChecked : classes.label,
      }}
    />
  );
};

export default StyledCheckbox;
