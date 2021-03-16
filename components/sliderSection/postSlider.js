import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import SinglePostSlide from "./singlePostSlide";

const useStyles = makeStyles(theme => ({
    postSlider: {
        display: "flex",
        overflowX: "hidden",
        width: "1400px",
        minHeight: "200px",
    }
}));
export default function PostSlider() {
    const classes = useStyles();
    return (
        <Grid container className={classes.postSlider} spacing={2} wrap="nowrap">
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
