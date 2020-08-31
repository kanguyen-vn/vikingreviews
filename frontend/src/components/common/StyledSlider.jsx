import React from "react";
import Slider from "@material-ui/core/Slider";
import StyledParagraph from "./StyledParagraph";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  markLabel: {
    color: theme.palette.secondary.light,
    '&[data-index="0"]': {
      transform: "translateX(0%)",
    },
    '&[data-index="10"]': {
      transform: "translateX(-100%)",
    },
  },
  markLabelActive: {
    color: "white",
  },
  valueLabel: {
    color: theme.palette.primary.dark,
  },
}));

const StyledSlider = ({ children, textColor, marks }) => {
  const classes = useStyles();
  return (
    <>
      <StyledParagraph color={textColor}>{children}</StyledParagraph>
      <Slider
        defaultValue={5}
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={0}
        max={10}
        track={false}
        color="secondary"
        classes={{
          markLabel: classes.markLabel,
          valueLabel: classes.valueLabel,
          markLabelActive: classes.markLabelActive,
        }}
      />
    </>
  );
};

export default StyledSlider;
