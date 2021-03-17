import { Grid, makeStyles, Fab } from "@material-ui/core";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "auto",
    alignItems: "stretch",
    overflow: "hidden",
    flexWrap: "nowrap",
    scrollBehavior: "smooth",
    position: "relative",
  },
  arrowBack: {
    position: "absolute",
    left: "0",
    top: "50%",
    transform: `translate(0%, -50%)`,
  },
  arrowForward: {
    position: "absolute",
    right: "0",
    top: "50%",
    transform: `translate(0%, -50%)`,
  },
  wrapper: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      position: "relative"
  }
}));
export default function PostList({children}) {
  const classes = useStyles();
  const myRef = useRef();

  const clickBack = (e) => {
    myRef.current.scrollLeft -= myRef.current.offsetWidth;
  };

  const clickNext = (e) => {
    myRef.current.scrollLeft += myRef.current.offsetWidth;
  };
  return (
      <div className={classes.wrapper}>

      <Grid ref={myRef} container className={classes.gridContainer} spacing={1}>
       {children}
      </Grid>
        <Fab
            color="primary"
            className={classes.arrowBack}
            onClick={clickBack}
            >
            <ArrowLeft />
            </Fab>
            <Fab
            color="primary"
            className={classes.arrowForward}
            onClick={clickNext}
            >
            <ArrowRight />
            </Fab>
            </div>

  );
}

