import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useWindowDimensions from '../misc/useWindowDimensions';


const useStyles = makeStyles(() => ({
    button: {
        // boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
        fontFamily: "Inter",
        fontWeight: "500",
        // "&:hover": {
        //   boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.15)",
        // },
    },
}));

const AddReviewButton = ({ text, onClick }) => {
    const classes = useStyles();
    const { height, width } = useWindowDimensions();
    return (
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            size= {width < 460 ? ("medium" ) : "small"}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default AddReviewButton;
