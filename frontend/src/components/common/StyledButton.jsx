import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
    fontFamily: "Inter",
    fontWeight: "300",
    "&:hover": {
      boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
    },
  },
}));

const StyledButton = ({ text, onClick }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      size="large"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default StyledButton;
