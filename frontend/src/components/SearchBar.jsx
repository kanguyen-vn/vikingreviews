import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     //margin: theme.spacing(1),
//     margin: "10px 0 0 0",
//   },
//   textField: {
//     background: "white",
//     boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
//     fontStyle: "italic",
//   },
//   notchedOutline: {
//     borderWidth: "1px",
//     borderColor: "white",
//   },
//   textFieldPosition: {
//     position: "absolute",
//     top: theme.spacing(2),
//     right: theme.spacing(12),
//   },
// }));

// const SearchBar = ({ home = false }) => {
//   const classes = useStyles();
//   return (
//     <TextField
//       className={
//         (!home && classes.textFieldPosition) || "input-with-icon-textfield"
//       }
//       variant="outlined"
//       placeholder={
//         (home && "Search for department, class, or professor...") || "Search..."
//       }
//       InputProps={{
//         className: classes.textField,
//         classes: {
//           notchedOutline: classes.notchedOutline,
//         },
//       }}
//     />
//   );
// };

const useStyles = (theme) => ({
  margin: {
    //margin: theme.spacing(1),
    margin: "10px 0 0 0",
  },
  textField: {
    background: "white",
    boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
    fontStyle: "italic",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white",
  },
  textFieldPosition: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(12),
  },
  home: {},
});

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
];

class SearchBar extends Component {
  render() {
    const { home, classes } = this.props;
    return (
      <Autocomplete
        id="combo-box-demo"
        className={(!home && classes.textFieldPosition) || classes.home}
        options={top100Films}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        fullWidth={home ? true : false}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={
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
    );
  }
}

export default withStyles(useStyles)(SearchBar);
