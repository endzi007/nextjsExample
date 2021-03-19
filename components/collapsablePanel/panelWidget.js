import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  }
}));

export default function CollapsableWidget({ children }) {
  const classes = useStyles();
  return (
    <Grid item className={classes.wrapper}>
      {children}
    </Grid>
  );
}
