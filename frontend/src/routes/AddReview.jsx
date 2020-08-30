import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from '../misc/useWindowDimensions';
import AddReviewButton from "../components/AddReviewButton";
import CancelButton from "../components/common/CancelButton";
import StyledButton from "../components/common/StyledButton";
import ErrorIcon from "@material-ui/icons/Error";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from "react-router-dom";
import LoginError from "../components/LoginError";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';


import {
  makeStyles,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Slider,
  ButtonGroup,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  margin: {
    //margin: theme.spacing(1),
    margin: "10px 0 0 0",
  },
  headerTextStyle: {
    // fontWeight: "700",
    [theme.breakpoints.down('sm')]: {
      fontWeight: "300",
    },
    [theme.breakpoints.up('sm')]: {
      fontWeight: "700",
    },
  },

  p: {
    textAlign: "center",
    // color: grey[700],
    fontSize: "100%",
  },
  pageStyles: {
    height: "100vh",
    // height: useWindowDimensions()[0],
    weight: '100vh',
    background: theme.palette.secondary.main,
  },

  paperStyles: {
    // height: "90vh",
    // background: "grey",
    // boxShadow: "10px 10px 0px 0px rgba(0,0,0,0.15)",
    borderRadius: 16,
  },
  inputAccordionStyles: {
    height: "80vh",
    color: theme.palette.secondary,
  },

  tableStyles: {
    height: "60vh",
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '30vh',
      font: '9px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '54vh',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '84vh',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: '115vh',
    },
    [theme.breakpoints.up('xl')]: {
      width: '140vh',
    },
    // width: '130vh',
    background: "white",
    borderRadius: 16,
  },
  notFound: {
    padding: "0 50px 0 50px",
    textAlign: "center",
    fontWeight: 500,
    fontStyle: "italic",
    color: theme.palette.secondary.dark,
  },
  errorIcon: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "200px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "300px",
    },
  },
  accordionStyle: {
    width: '90vh'
  }
}));

function valuetext(value) {
  return `{value}`;
}

export default function EditReview() {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [isLoggedIn] = React.useState(true);
  const history = useHistory();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [autocompLength] = width < 460 ? ("37vh") : "50vh";
  console.log(height);
  console.log(width);

  const newDate = new Date();
  const thisYear = newDate.getFullYear();
  const years = ['' + (thisYear - 3), '' + (thisYear - 2), '' + (thisYear - 1), '' + thisYear, '' + (thisYear + 1)]
  const terms = ['Fall', 'Winter', 'Spring', 'December'];
  const departments = ["CMSC Computer Science", "ECON Economics", "MUTH Music Theory", "PSYC Psychology", "SPAN Spanish"];
  const textbookUsage = ['Always', 'Sometimes', 'Never']
  const [valueTerm, setValueTerm] = React.useState(terms[0]);
  const [valueYear, setValueYear] = React.useState(years[3]);
  const [valueDept, setValueDept] = React.useState(departments[0]);
  const [valueTextFreq, setValueTextFreq] = React.useState(textbookUsage[1]);
  const [inputValueTerm, setInputValueTerm] = React.useState('');
  const [inputValueYear, setInputValueYear] = React.useState('');
  const [inputValueDept, setInputValueDept] = React.useState('');
  const [inputValueTextFreq, setInputValueTextFreq] = React.useState('');

  if (!isLoggedIn) {
    return (<LoginError />) // TODO: fix needed
  } else {
    return (
      <Grid
        container
        className={classes.pageStyles}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Grid
          container
          item
          xs={11}
          md={6}
          container
          className={classes.paperStyles}
          // justify="center"
          alignItems="center"
          direction="row"
          style={{ overflow: "auto", height: "85vh" }}
        >

          {/* this is to fix overwraping of menu btn and title */}
          <Grid item xs={12}>
            <p></p>
          </Grid>
          <Grid item xs={12}>
            <p></p>
          </Grid>

          <Grid
            container
            xs={12}
            md={12}
            className={classes.inputStyles}
            justify="center"
            alignContent="center"
            direction="column"
          >


            <Grid
              item
              xs={12}
              md={12}>


              <Typography
                variant={width < 460 ? ("h4") : "h1"}
                gutterBottom
                className={classes.headerTextStyle}
              // font-weight='700'
              >
                Add your review
              </Typography>
            </Grid>

            <Grid
              item
              container
              xs={12}
              md={12}
              className={classes.inputAccordionStyles}
              alignContent="flex-start"
              direction="row"
            >
              <Accordion
                className={classes.accordionStyle}
                expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="accordion-summary-basics"
                  id="accordion-summary-basics"
                >
                  <Typography className={classes.heading}>Basic Information</Typography>
                </AccordionSummary>
                <AccordionDetails>

                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="baseline"
                  >

                    <Grid item xs={12}>
                      <Autocomplete
                        value={valueDept}
                        onChange={(event, newValue) => {
                          setValueDept(newValue);
                        }}
                        inputValue={inputValueDept}
                        onInputChange={(event, newInputValue) => {
                          setInputValueDept(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={departments}
                        style={{ width: autocompLength }}
                        renderOption={(option) => (
                          <React.Fragment>
                            <span>{option}</span>
                          </React.Fragment>
                        )}
                        renderInput={(params) =>
                          <TextField {...params}
                            label="Department"
                            variant="outlined"
                            // size="small"
                            size={width < 460 ? ("small") : "normal"}
                          />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="course_id"
                        name="course_id"
                        label="Course #"
                        autoComplete="course_id"
                        variant="outlined"
                        fullWidth
                        // size="small"
                        size={width < 460 ? ("small") : "normal"}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Autocomplete
                        value={valueTerm}
                        onChange={(event, newValue) => {
                          setValueTerm(newValue);
                        }}
                        inputValue={inputValueTerm}
                        onInputChange={(event, newInputValue) => {
                          setInputValueTerm(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={terms}
                        style={{ width: autocompLength }}
                        renderInput={(params) =>
                          <TextField {...params}
                            label="Term"
                            variant="outlined"
                            // size="small"
                            size={width < 460 ? ("small") : "normal"}
                          />}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Autocomplete
                        value={valueYear}
                        onChange={(event, newValue) => {
                          setValueYear(newValue);
                        }}
                        inputValue={inputValueYear}
                        onInputChange={(event, newInputValue) => {
                          setInputValueYear(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={years}
                        style={{ width: autocompLength }}
                        renderInput={(params) => <TextField {...params}
                          label="Year" variant="outlined"
                          // size="small"
                          size={width < 460 ? ("small") : "normal"}
                        />}
                      />
                    </Grid>

                  </Grid>

                </AccordionDetails>
              </Accordion>

              <Accordion
                className={classes.accordionStyle}
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="accordion-summary-instructor"
                  id="accordion-summary-instructor"
                >
                  <Typography className={classes.heading}>Instructor Information</Typography>
                </AccordionSummary>
                <AccordionDetails>

                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="baseline"
                  >

                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        id="instructor"
                        name="instructor"
                        label="Instructor Name"
                        fullWidth
                        autoComplete="instructor"
                        variant="outlined"
                        // size="small"
                        size={width < 460 ? ("small") : "normal"}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        // variant="body1"
                        variant={width < 460 ? ("caption") : "body1"}
                      >
                        Enthusiasm*
                      </Typography>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        // variant="body1"
                        variant={width < 460 ? ("caption") : "body1"}
                      >
                        (0: light - 10: heavy)
                    </Typography>
                      <Slider
                        defaultValue={6}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={0.1}
                        marks
                        min={1}
                        max={5}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        // variant="body1"
                        variant={width < 460 ? ("caption") : "body1"}
                      >
                        Grading*
                      </Typography>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        // variant="body1"
                        variant={width < 460 ? ("caption") : "body1"}
                      >
                        (0: light - 10: heavy)
                      </Typography>
                      <Slider
                        defaultValue={6}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={0.1}
                        marks
                        min={1}
                        max={5}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        // variant="body1"
                        variant={width < 460 ? ("caption") : "body1"}
                      >
                        Flexibility*
                      </Typography>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        // variant="body1"
                        variant={width < 460 ? ("caption") : "body1"}
                      >
                        (0: light - 10: heavy)
                      </Typography>
                      <Slider
                        defaultValue={6}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={0.1}
                        marks
                        min={1}
                        max={5}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        // variant="body1"
                        variant={width < 460 ? ("caption") : "body1"}
                      >
                        Textbook  Usage*
                      </Typography>
                      <Autocomplete
                        value={valueTextFreq}
                        onChange={(event, newValue) => {
                          setValueTextFreq(newValue);
                        }}
                        inputValue={inputValueTextFreq}
                        onInputChange={(event, newInputValue) => {
                          setInputValueTextFreq(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={textbookUsage}
                        style={{ width: autocompLength }}
                        renderInput={(params) => <TextField {...params}
                          variant="outlined"
                          // size="small"
                          size={width < 460 ? ("small") : "normal"}
                        />}
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>

              <Accordion className={classes.accordionStyle} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="accordion-summary-workload"
                  id="accordion-summary-workload"
                >
                  <Typography className={classes.heading}>Workload Information</Typography>
                </AccordionSummary>
                <AccordionDetails>

                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="baseline"
                  >
                    <Grid item xs={12} sm={6}>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        // variant="body1"
                        variant={width < 460 ? ("caption") : "body1"}
                      >
                        Overall Workload*
                      </Typography>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        // variant="body1"
                        variant={width < 460 ? ("caption") : "body1"}
                      >
                        (0: easy - 10: hard)
                      </Typography>
                      <Slider
                        defaultValue={3}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={0.1}
                        marks
                        min={1}
                        max={5}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        // variant="body1"
                        variant={width < 460 ? ("caption") : "body1"}
                      >
                        Lab*
                      </Typography>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        // variant="body1"
                        variant={width < 460 ? ("caption") : "body1"}
                      >
                        (0: little - 10: lot)
                      </Typography>
                      <Slider
                        defaultValue={3}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={0.1}
                        marks
                        min={1}
                        max={5}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        // variant="body1"
                        variant={width < 460 ? ("caption") : "body1"}
                      >
                        Homework*
                      </Typography>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        variant={width < 460 ? ("caption") : "body1"}
                      // variant="body1"
                      >
                        (0: light - 10: heavy)
                      </Typography>
                      <Slider
                        defaultValue={3}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={0.1}
                        marks
                        min={1}
                        max={5}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        // variant="body1"
                        variant={width < 460 ? ("caption") : "body1"}
                      >
                        Class Participation*
                      </Typography>
                      <Typography
                        id="discrete-slider"
                        gutterBottom
                        variant={width < 460 ? ("caption") : "body1"}
                      // variant="body1"
                      >
                        (0: light - 10: heavy)
                      </Typography>
                      <Slider
                        defaultValue={3}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={0.1}
                        marks
                        min={1}
                        max={5}
                      />
                    </Grid>
                  </Grid>

                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.accordionStyle} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="accordion-summary-comment"
                  id="accordion-summary-comment"
                >
                  <Typography className={classes.heading}>Comment</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="review_text"
                      name="review_text"
                      label="Leave your thought here! "
                      fullWidth
                      // autoComplete="review_text"
                      variant="outlined"
                      // size="small"
                      rows={5}
                    />
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Grid container xs={12}>
                <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={2} >
                  <Grid item xs={12} justify='center' alignItems='center'>
                    <FormControlLabel
                      control={<Checkbox color="primary" name="anonymous" value="yes" />}
                      label="Stay anonymous"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CancelButton text='Cancel' />
                  </Grid>
                  <Grid item xs={12}>
                    <AddReviewButton text='Add your review' />
                  </Grid>
                  <Grid item xs={12}>
                    <p></p>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    );
  }
}
