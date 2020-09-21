import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import DrawerHeader from "./common/DrawerHeader";
import StyledAccordion from "./common/StyledAccordion";
import SearchBar from "./SearchBar";
import _ from "lodash";
import StyledSlider from "./common/StyledSlider";
import TextInput from "./common/TextInput";
import StyledButton from "./common/StyledButton";
import StyledCheckbox from "./common/StyledCheckbox";
import { addReviewSchema, maxComment } from "../utils/validationSchemas";
import * as validation from "../utils/validation";
import { pink } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";

const terms = [
  { key: "F", value: "Fall" },
  { key: "W", value: "Winter" },
  { key: "S", value: "Spring" },
  { key: "D", value: "December" },
];

class SeeReviewDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        anonymous: this.props.review.anonymous,
        course: this.props.detail,
        instructor: this.props.review.instructor,
        comment: this.props.review.content[0],
        workload: this.props.review.workload,
        lab: this.props.review.lab,
        homework: this.props.review.homework,
        classParticipation: this.props.review.classParticipation,
        instructorEnthusiasm: this.props.review.instructorEnthusiasm,
        grading: this.props.review.grading,
        flexibility: this.props.review.flexibility,
        textbookUse: this.props.review.textbookUse,
        term: this.props.review.term,
        year: this.props.review.year,
      },
      errors: {},
    };
    // this.schema = addReviewSchema;
    // this.validate = validation.validate.bind(this);
    // this.validateProperty = validation.validateProperty.bind(this);
    // this.handleChange = validation.handleChange.bind(this);
    console.log(props);
  }

  render() {
    const { data, errors } = this.state;
    console.log(data);
    return (
      <>
        <DrawerHeader>Review</DrawerHeader>
        <Grid container direction="column" spacing={2} alignItems="center">
          <Grid item container direction="column">
            <Typography>
                Instructor: {data.instructor}
            </Typography>
            <Typography>
                Year: {data.year}
            </Typography>
            <Typography>
                Term: {data.term}
            </Typography>
            <Typography>
                Overall Workload: {data.workload}
            </Typography>
            <Typography>
                Homework: {data.homework}
            </Typography>
            <Typography>
                Class Participation: {data.classParticipation}
            </Typography>
            <Typography>
                Grading: {data.grading}
            </Typography>
            <Typography>
                Flexibility: {data.flexibility}
            </Typography>
            <Typography>
                Enthusiasm: {data.instructorEnthusiasm}
            </Typography>
            <Typography>
                Textbook Use: {data.textbookUse}
            </Typography>
            <Typography>
                Comment: {data.comment}
            </Typography>
            
          
          </Grid>
          {/* <Grid item container justify="center" alignItems="center">
           
          </Grid> */}
          
        </Grid>
      </>
    );
  }
}

export default SeeReviewDetails;
