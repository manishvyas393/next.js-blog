import Title from "../components/Title";
import axios from "axios";
import Link from "next/link";
import style from "../styles/Home.module.css"
export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <Title heading="Home Page" />
      <h1 className={style.h1}>Our Blogs</h1>
      <div className={style.post}>
        {
          data.map((post, i) => (
            <Link href={"/post/"+post.id}>
              <div key={i}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            </Link>
          

          ))
        }

      </div>
     

    </>
  )
}
export async function getStaticProps() {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")

  return {
    props: {
      data
    },
    revalidate:10
  }
}