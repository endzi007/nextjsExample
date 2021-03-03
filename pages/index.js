import DefaultLayout from "../components/defaultLayout";

export default function Home({title, children, todos}) {
  console.log(todos, "todos in home");
  return (
  <DefaultLayout title="Enis ">
    <div>
      <ul>
        {todos.map((todo)=>{
          return <li key={`${todo.id}_${todo.userId}`}>{todo.title}</li>
        })}
      </ul>
    </div>
  </DefaultLayout>
  );
}

export async function getStaticProps (context){
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
 
}