import DefaultLayout from "../components/defaultLayout";

export default function Home({title, children, todos}) {
  return (
  <DefaultLayout title="Enis ">
    <div>
     Home page
    </div>
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