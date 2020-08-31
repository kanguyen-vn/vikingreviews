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

const terms = [
  { key: "Fall", value: "F" },
  { key: "Winter", value: "W" },
  { key: "Spring", value: "S" },
  { key: "December", value: "D" },
];

const maxComment = 1000;

class AddReview extends Component {
  state = { expanded: "", anonymous: false };

  handleChange = (panel) => (event, newExpanded) => {
    const expanded = newExpanded ? panel : false;
    this.setState({ expanded });
  };

  getYearsArray = () => {
    const currentYear = new Date().getFullYear();
    return _.range(currentYear - 10, currentYear + 1)
      .reverse()
      .map((year) => year.toString());
  };

  generateMarks = (zero, five, ten) => {
    return [
      { value: 0, label: zero },
      { value: 1, label: "" },
      { value: 2, label: "" },
      { value: 3, label: "" },
      { value: 4, label: "" },
      { value: 5, label: five },
      { value: 6, label: "" },
      { value: 7, label: "" },
      { value: 8, label: "" },
      { value: 9, label: "" },
      { value: 10, label: ten },
    ];
  };

  handleCheckbox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const { expanded } = this.state;
    return (
      <>
        <DrawerHeader>Add Review</DrawerHeader>
        <Grid container direction="column" spacing={2} alignItems="center">
          <Grid item container direction="column">
            <StyledAccordion
              header="Course Information"
              expanded={expanded === "panel1"}
              onChange={this.handleChange("panel1")}
              highlighted
            >
              <Grid container justify="center" style={{ width: "100%" }}>
                <Grid
                  item
                  direction="column"
                  alignItems="stretch"
                  container
                  spacing={3}
                  style={{
                    padding: "10px 0px",
                  }}
                >
                  <Grid item>
                    <SearchBar types={["Course"]} inherit>
                      Course...
                    </SearchBar>
                  </Grid>
                  <Grid item>
                    <SearchBar
                      options={["Fall", "Winter", "Spring", "December"]}
                      inherit
                    >
                      Term...
                    </SearchBar>
                  </Grid>
                  <Grid item>
                    <SearchBar options={this.getYearsArray()} inherit>
                      Year...
                    </SearchBar>
                  </Grid>
                </Grid>
              </Grid>
            </StyledAccordion>
            <StyledAccordion
              header="Instructor"
              expanded={expanded === "panel2"}
              onChange={this.handleChange("panel2")}
              highlighted
            >
              <Grid container justify="center" style={{ width: "100%" }}>
                <Grid
                  item
                  direction="column"
                  alignItems="stretch"
                  container
                  spacing={3}
                  style={{
                    padding: "10px 0px",
                  }}
                >
                  <Grid item>
                    <SearchBar types={["Instructor"]} inherit>
                      Instructor...
                    </SearchBar>
                  </Grid>
                  <Grid item>
                    <StyledSlider
                      textColor="white"
                      marks={this.generateMarks(
                        "Very unenthusiastic",
                        "OK",
                        "Very enthusiastic"
                      )}
                    >
                      Enthusiasm:
                    </StyledSlider>
                  </Grid>
                  <Grid item>
                    <StyledSlider
                      textColor="white"
                      marks={this.generateMarks(
                        "Very lenient",
                        "OK",
                        "Very strict"
                      )}
                    >
                      Grading:
                    </StyledSlider>
                  </Grid>
                  <Grid item>
                    <StyledSlider
                      textColor="white"
                      marks={this.generateMarks(
                        "Very flexible",
                        "OK",
                        "Very rigid"
                      )}
                    >
                      Flexibility:
                    </StyledSlider>
                  </Grid>
                  <Grid item>
                    <SearchBar
                      options={["Never", "Sometimes", "Always"]}
                      inherit
                    >
                      Textbook usage...
                    </SearchBar>
                  </Grid>
                </Grid>
              </Grid>
            </StyledAccordion>
            <StyledAccordion
              header="Workload"
              expanded={expanded === "panel3"}
              onChange={this.handleChange("panel3")}
              highlighted
            >
              <Grid container justify="center" style={{ width: "100%" }}>
                <Grid
                  item
                  direction="column"
                  alignItems="stretch"
                  container
                  spacing={3}
                  style={{
                    padding: "10px 0px",
                  }}
                >
                  <Grid item>
                    <StyledSlider
                      textColor="white"
                      marks={this.generateMarks("None", "Weekly", "Daily")}
                    >
                      Homework:
                    </StyledSlider>
                  </Grid>
                  <Grid item>
                    <StyledSlider
                      textColor="white"
                      marks={this.generateMarks(
                        "Not required",
                        "Occasional",
                        "Strict"
                      )}
                    >
                      Class Participation:
                    </StyledSlider>
                  </Grid>
                  <Grid item>
                    <StyledSlider
                      textColor="white"
                      marks={this.generateMarks("A lot", "OK", "Not required")}
                    >
                      Lab:
                    </StyledSlider>
                  </Grid>
                  <Grid item>
                    <StyledSlider
                      textColor="white"
                      marks={this.generateMarks("Very easy", "OK", "Very hard")}
                    >
                      Overall:
                    </StyledSlider>
                  </Grid>
                </Grid>
              </Grid>
            </StyledAccordion>
            <StyledAccordion
              header="Review"
              expanded={expanded === "panel4"}
              onChange={this.handleChange("panel4")}
              highlighted
            >
              <Grid item container direction="column" justify="center">
                {/* <p
              className={classes.counter}
              style={{
                color: data.comment.length >= maxComment - 10 && red[300],
              }}
            >{`${maxComment - data.comment.length}/${maxComment}`}</p> */}
                <p>lol</p>
                <TextInput
                  placeholder="Your review..."
                  multiline
                  name="comment"
                  defaultValue=""
                  // onChange={this.handleChange}
                  // errorText={errors && errors.comment ? errors.comment : null}
                />
              </Grid>
            </StyledAccordion>
          </Grid>
          <Grid item container justify="center" alignItems="center">
            <StyledCheckbox
              checked={this.state.anonymous}
              onChange={this.handleCheckbox}
              name="anonymous"
              label="Stay anonymous"
            />
          </Grid>
          <Grid item container justify="center" alignItems="center">
            <StyledButton text="Submit" />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default AddReview;
