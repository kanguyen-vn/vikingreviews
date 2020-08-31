import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";

const useStyles = (theme) => ({
  margin: {
    margin: "10px 0 0 0",
  },
  textField: {
    background: "white",
    boxShadow: theme.shadows[7],
    //fontStyle: "italic",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white",
  },
  textFieldPosition: {
    position: "fixed",
    width: 280,
    [theme.breakpoints.down("xs")]: {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    [theme.breakpoints.up("sm")]: {
      top: theme.spacing(2),
      right: theme.spacing(12),
    },
  },
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
      fontWeight: "bold",
    },
  },
  customOption: {
    fontSize: 15,
  },
});

const choices = [
  // sort groups before display
  { left: "CMSC", right: "Computer Science", type: "Department" },
  { left: "ECON", right: "Economics", type: "Department" },
  { left: "MUTH", right: "Music Theory", type: "Department" },
  { left: "PSYC", right: "Psychology", type: "Department" },
  { left: "SPAN", right: "Spanish", type: "Department" },
  { left: "CMSC 150", right: "Intro to Computer Science", type: "Course" },
  { left: "ECON 120", right: "Some Kind of Economics", type: "Course" },
  { left: "MUTH 420", right: "Schenkerian Analysis", type: "Course" },
  { left: "PSYC 270", right: "Social Psychology", type: "Course" },
  { left: "SPAN 100", right: "Introduction to Spanish", type: "Course" },
  { left: "Joseph Gregg", right: "CMSC", type: "Instructor" },
  { left: "Barack Obama", right: "ECON", type: "Instructor" },
  { left: "Ian Bates", right: "MUTH", type: "Instructor" },
  { left: "Cardi B", right: "PSYC", type: "Instructor" },
  { left: "Ariana Grande", right: "SPAN", type: "Instructor" },
];

class SearchBar extends Component {
  filterChoices = (types) => {
    let all = [];
    types.map((type) => {
      all = [...all, ...choices.filter((choice) => choice.type === type)];
    });
    return all;
  };

  render() {
    const {
      home = false,
      classes,
      types,
      inherit = false,
      children,
      options = null,
    } = this.props;
    return (
      (options && (
        <Autocomplete
          className={(!inherit && !home && classes.textFieldPosition) || ""}
          options={options}
          getOptionLabel={(option) => option}
          classes={{
            option: classes.customOption,
          }}
          renderOption={(option) => option}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={children}
              variant="outlined"
              className={classes.textField}
              InputProps={{
                ...params.InputProps,
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          )}
        />
      )) || (
        <Autocomplete
          className={(!inherit && !home && classes.textFieldPosition) || ""}
          options={types ? this.filterChoices(types) : choices}
          getOptionLabel={(option) => `${option.left} ${option.right}`}
          groupBy={(option) => option.type}
          classes={{
            option: classes.option,
          }}
          renderOption={(option) => (
            <React.Fragment>
              <span>{option.left}</span>
              {option.right}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={
                children ||
                (home && "Search for department, class, or professor...") ||
                "Search..."
              }
              variant="outlined"
              className={classes.textField}
              InputProps={{
                ...params.InputProps,
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          )}
        />
      )
    );
  }
}

export default withStyles(useStyles)(SearchBar);
