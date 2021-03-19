import DefaultLayout from "../components/defaultLayout";
import fs from 'fs';
import { Grid, makeStyles, Typography } from "@material-ui/core";
import PostList from "../components/posts/postList";
import SinglePost from "../components/posts/singlePost";
import CollapsableWidget from "../components/collapsablePanel/panelWidget";
import CollapsablePanel from "../components/collapsablePanel/singlePanel";
const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.background.paper
    },
    section: {
      minHeight: "300px",
      height: "auto",
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15)
    },
    dogSectionInner: {
      paddingTop: theme.customProps.paddingTop
    },
    sliderSection:{
      backgroundColor: "#fff"
    },
    expandableSection:{},
    reviewSection: {
      backgroundColor: "#fff"
    },

}))

const setupPosts = ()=>{
      let arr = [];
      for (let index = 0; index < 10; index++) {
        arr.push(<SinglePost />);
      }
      return arr;
}

export default function Home({title, children, todos}) {
  const classes = useStyles();
  return (
  <DefaultLayout title="Enis ">
      <Grid container className={classes.container}>
          <Grid className={`${classes.section} ${classes.dogSection}`} item xs={12}>
            <Grid container className={`${classes.dogSectionInner}`}>
                Header top
            </Grid>
          </Grid>
          <Grid className={`${classes.section} ${classes.sliderSection}`} item xs={12}>
            <PostList> 
              {setupPosts()}
            </PostList>
          </Grid>
          <Grid className={`${classes.section} ${classes.expandableSection}`} item xs={12}> 
            <Grid container>
              <Grid item xs={12}>
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