import Image from "next/image";
import styles from "../styles/HomePage.module.css";
import PostList from "./posts/postList";
import SinglePost from "./posts/singlePost";

export default function HomeComponent() {
    return (
        <div>
            <section className={styles.section} style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <div className={styles.card}>
                    <h1 style={{paddingBottom: "5px", marginBottom: "10px"}}>Lorem ipsum</h1>
                    <h6 style={{padding: "0px", margin: "0px"}}>Lorem ipsumLorem ipsumLorem ipsum</h6>
                </div>
                <Image 
                    src="/photos/dog.png"
                    alt="DogPIcture"
                    width="500px"
                    height="500px"
                    layout="intrinsic"
                />
            </section>
            <section className={`${styles.section} fullWidthSection padding`} style={{backgroundColor: "white", minHeight: "500px"}}>
                <PostList />
            </section>
            <section className={`${styles.section} fullWidthSection padding`}>
            </section>
        </div>
    );
    
}
  