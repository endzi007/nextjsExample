import DefaultLayout from "../components/defaultLayout";
import BlogLayoutRightSideBar from '../components/blogLayout';
export default function Home({title, children, todos}) {

  return (
  <DefaultLayout title="About page">
    <BlogLayoutRightSideBar>
      
    </BlogLayoutRightSideBar>
  </DefaultLayout>
  );
}
