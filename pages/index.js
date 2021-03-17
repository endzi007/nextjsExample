import DefaultLayout from "../components/defaultLayout";
import fs from 'fs';
import { Grid, makeStyles } from "@material-ui/core";
import PostList from "../components/posts/postList";
import SinglePost from "../components/posts/singlePost";
const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.primary.main
    },
    section: {
      minHeight: "300px",
      padding: theme.spacing(10)
    },
    dogSection: {
      backgroundColor: "red",
    },
    dogSectionInner: {
      paddingTop: theme.customProps.paddingTop
    },
    sliderSection:{},
    expandableSection:{},
    reviewSection: {},

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
      <Grid container className={classes.container} spacing={8}>
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
              <Grid item xs={6}>
              <PostList> 
                {setupPosts()}
              </PostList>
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