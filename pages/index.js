import DefaultLayout from "../components/defaultLayout";
import fs from 'fs';
import { Grid, makeStyles, Typography, Paper} from "@material-ui/core";
import PostList from "../components/posts/postList";
import SinglePost from "../components/posts/singlePost";
import CollapsableWidget from "../components/collapsablePanel/panelWidget";
import CollapsablePanel from "../components/collapsablePanel/singlePanel";
import { useEffect } from "react";
import SlidersData from "../data/home/sliderSection.json";

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        marginTop: "8vh",
        paddingTop: "100px",
        position: "relative"
    },
    section: {
      minHeight: "300px",
      height: "auto",
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      paddingLeft: "6vw",
      paddingRight: "6vw",
      position:"relative",
      [theme.breakpoints.down("xs")]:{
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      }
    },
    dogSectionInner: {
      paddingTop: theme.customProps.paddingTop,
      position: "relative",
      minHeight: "60vh"
    },
    sliderSection:{
      backgroundColor: "#fff"
    },
    expandableSection:{
      position: "relative"
    },
    reviewSection: {
      backgroundColor: "#fff"
    },
    pictureHolder:{
      minHeight: "100%",
    },
    dogPicture:{
      width: "50%",
      height: "auto",
      maxWidth: "50%",
      maxHeight: "100%",
      position: "absolute",
      objectFit: "contain",
      right: "0",
      top: "50%",
      transform: "translateY(-50%)",
      [theme.breakpoints.down("xs")]:{
        width: "100%",
        maxWidth: "100%",
        position: "relative",
        objectFit: "cover"
      }
    },
    headerDogPicture: {
      position: "absolute",
      bottom: "50%",
      right: "0",
      height: "auto",
      width: "50%",
      maxHeight: "200%",
      transform: "translateY(50%)",
      objectFit: "scale-down",
      overflow: "hidden"
    },
    headerCard: {
      position: "absolute",
      left: 0,
      top: 0,
      minHeight: "200px",
      padding: theme.spacing(3),
      maxWidth: "50ch", 
    }

}))

const setupPosts = ()=>{
/*       let arr = [];
      
      for (let index = 0; index < 10; index++) {
        arr.push(<SinglePost />);
      }
      return arr; */

      let arr = SlidersData.map(slider => <SinglePost />);
      return arr;
  
}


export default function Home({title, children, todos}) {
  const classes = useStyles();
  
useEffect(()=>{
  fetch('http://localhost:3000/data/test.json', {
    body:{

    }
  }).then((data)=>{
    return data.json();
  }).then((posts)=>{
    console.log(posts);
  }).catch((e)=>{
    console.log(e)
  });
}, [])
  return (
  <DefaultLayout title="Enis ">
      <Grid container className={classes.container}>
          <Grid className={`${classes.section} ${classes.dogSection}`} item xs={12}>
            <Grid container className={`${classes.dogSectionInner}`}>
              <Grid className={classes.pictureHolder} item xs={12}>
                    <Paper className={classes.headerCard}>
                      <Typography variant="h1" color="primary">
                        Enisss 
                      </Typography>
                      <Typography variant="body1" color="textPrimary">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </Typography>
                    </Paper>
                    <img className={classes.headerDogPicture} src="/photos/dog.png" alt="Picture of dog"/>
                </Grid>
            </Grid>
          </Grid>
          <Grid className={`${classes.section} ${classes.sliderSection}`} item xs={12}>
            <PostList> 
              {setupPosts()}
            </PostList>
          </Grid>
          <Grid className={`${classes.section} ${classes.expandableSection}`} item xs={12}> 
            <Grid container>
              <Grid item xs={12} sm={6}>
              <CollapsableWidget>
                <CollapsablePanel title="Heading1">
                <Typography variant="body1">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</Typography>
                </CollapsablePanel>
                <CollapsablePanel title="Heading1">
                <Typography variant="body1">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</Typography>
                </CollapsablePanel>
                <CollapsablePanel title="Heading1">
                  <SinglePost />
                </CollapsablePanel>
              </CollapsableWidget>
              </Grid>
              <Grid className={classes.pictureHolder} item xs={12} sm={6}>
                  <img className={classes.dogPicture} src="/photos/russianTerrier.png" alt="Russian Terrier"/>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={`${classes.section} ${classes.reviewSection}`} item xs={12}> Review section </Grid>
      </Grid>
  </DefaultLayout>
  );
}


export async function getStaticProps(ctx){
  const directory = fs.readdirSync("./pages");
  const pages = directory.filter(page =>{
    console.log(page[0] === "[");
      if(page !== "api"){
        if(page[0] !== "["){
          if(page[0] !== "_"){
            return page;
          }
        } 
      } 
      return "";
  })

  return {
    props: {
      menuPages: pages
    }
  }

}