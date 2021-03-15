import DefaultLayout from "../components/defaultLayout";
import HomeLayout from '../components/homeLayout';
import fs from 'fs';


export default function Home({title, children, todos}) {
  return (
  <DefaultLayout title="Enis ">
    <HomeLayout />
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
/* export async function getStaticProps (context){
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return {
      props: {
        todos: data
      }
    }
  } catch (error) {
    console.log(error);
  }
 
} */