import DefaultLayout from "../components/defaultLayout";
import HomeLayout from '../components/homeLayout';
export default function Home({title, children, todos}) {
  return (
  <DefaultLayout title="Enis ">
    <HomeLayout />
  </DefaultLayout>
  );
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