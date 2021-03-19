import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import SinglePostSlide from "./singlePostSlide";

const useStyles = makeStyles(theme => ({
    postSlider: {
        overflowX: "hidden",
        width: "100%",
        minHeight: "200px",
    }
}));
export default function PostSlider() {
    const classes = useStyles();
    return (
        <Grid container className={classes.postSlider} wrap="nowrap">
            <SinglePostSlide />
            <SinglePostSlide />
            <SinglePostSlide />
            <SinglePostSlide />
            <SinglePostSlide />
            <SinglePostSlide />
            <SinglePostSlide />
            <SinglePostSlide />
            <SinglePostSlide />
            <SinglePostSlide />
        </Grid>
    )
}
