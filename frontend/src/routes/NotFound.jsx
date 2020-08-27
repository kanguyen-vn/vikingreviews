import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import ErrorIcon from "@material-ui/icons/Error";
import { useHistory } from "react-router-dom";
import StyledButton from "../components/common/StyledButton";
import DrawerHeader from "../components/common/DrawerHeader";

const useStyles = makeStyles((theme) => ({
  pageStyles: {
    height: "100vh",
    background: theme.palette.secondary.main,
  },
  paperStyles: {
    height: "70vh",
    background: "white",
    boxShadow: theme.shadows[10],
    borderRadius: 16,
    //overflow: "auto",
  },
  notFound: {
    padding: "0 50px 0 50px",
    textAlign: "center",
    fontWeight: 500,
    fontStyle: "italic",
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h4.fontSize,
    },
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
  cardActions: {
    alignItems: "center",
  },
  halfHeight: {
    height: "50%",
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid
      container
      className={classes.pageStyles}
      justify="center"
      alignItems="center"
      direction="row"
    >
      {/* <Grid
        item
        xs={10}
        sm={8}
        md={6}
        lg={4}
        container
        //className={classes.paperStyles}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Typography className={classes.notFound} variant="h4">
          This page has been taken over by river bugs.
        </Typography>
        <Hidden xsDown>
          <Grid container type="row" justify="center">
            <ErrorIcon className={classes.errorIcon} />
          </Grid>
        </Hidden>
        <StyledButton text="Back to Home" onClick={() => history.push("/")} />
      </Grid> */}

      <Grid
        item
        xs={10}
        sm={8}
        md={6}
        lg={4}
        container
        //className={classes.paperStyles}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Card className={classes.paperStyles}>
          <CardMedia
            component="img"
            alt="Lawrence 404"
            className={classes.halfHeight}
            image="https://www.lawrence.edu/sites/default/files/bss/desktop/ref_db20.jpg"
            title="Lawrence 404"
          />
          <CardContent className={classes.halfHeight}>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="center"
            >
              <Grid item>
                <DrawerHeader primary>404</DrawerHeader>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary" component="p">
                  This page has been taken over by river bugs.
                </Typography>
              </Grid>
              <Grid item>
                <StyledButton
                  text="Back to Home"
                  onClick={() => history.push("/")}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NotFound;
