import { useEffect, useRef, useState } from "react";
import { Grid, makeStyles, Typography, IconButton, Paper, Card } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(1)
  },
  wrapper: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "3px 15px",
    alignContent: "end"
  },
  transitionClass: {
    transition: "all 280ms cubic-bezier(0.4, 0, 0.2, 1)",
    margin: "0",
    padding: "0",
    overflow: "hidden"
  },
  inner: {
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    padding: theme.spacing(2)
  }
}));

export default function CollapsablePanel({ title, children, passedStyle }) {
  const [open, setOpen] = useState(false);
  const myRef = useRef(null);
  const innerRef = useRef(null);
  const refStyles = useRef({
    height: "auto",
    opacity: 1
  });
  const classes = useStyles();

  useEffect(() => {
    refStyles.current.height = myRef.current.clientHeight + "px";
  }, []);

  useEffect(() => {
    window.addEventListener("resize", (e) => {});

    return window.removeEventListener("resize", () => {
      console.log("removed event listener");
    });
  }, []);

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.inner}>
        <Paper
          className={classes.wrapper}
          onClick={(e) => {
            setOpen(!open);
          }}
          elevation={3}
        >
          <Typography variant="h6">{title}</Typography>
          <IconButton color="primary">
            {!open ? <Add /> : <Remove />}
          </IconButton>
        </Paper>
        <div
          className={classes.transitionClass}
          style={{
            height: open ? innerRef.current.clientHeight : "0px",
            overflow: "hidden"
          }}
          ref={myRef}
        >
          <Paper elevation={0} className={classes.paper} style={{ height: "auto" }} ref={innerRef}>
            {children}
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}

/* 
  //
  const calcStyles = (isOpen) => {
    return {
      height:
        initialHeight === "auto"
          ? "auto"
          : isOpen
          ? `${initialHeight}px`
          : "0px",
      overflow: "hidden"
    };
  }; 
  */
