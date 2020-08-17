import React from "react";
import { Link } from "react-router-dom";
import {
    Grid,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox
} from '@material-ui/core'

class EditReview extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h6" gutterBottom>
        Leave your review
        </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="department"
            name="department"
            label="Department"
            autoComplete="given-name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="course_id"
            name="course_id"
            label="Course ID"
            autoComplete="course_id"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="term"
            name="term"
            label="Term"
            fullWidth
            autoComplete="term"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Year"
            name="Year"
            label="Year"
            multiline
            fullWidth
            autoComplete="Year"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="instructer"
            name="instructer"
            label="Instructer"
            fullWidth
            autoComplete="instructer"
            variant="outlined"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="review_text"
            name="review_text"
            label="Comment"
            fullWidth
            autoComplete="review_text"
            variant="outlined"
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="anonymous" value="yes" />}
            label="Stay anonymous"
          />
        </Grid>
      </Grid>
      </div>
    );
  }
}
export default EditReview;