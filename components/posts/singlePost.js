import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "auto",
    minHeight: "100%"
  },
  media: {
    height: "150px"
  },
  gridItem: {
    flexShrink: 0,
    flexBasis:"25%",
    flexGrow: 0
  }
});

export default function SinglePost() {
  const classes = useStyles();
  return (
    <Grid item className={classes.gridItem}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="../picture1.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
