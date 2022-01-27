import axios from "axios";
import styles from "./post.module.css"
export const getStaticPaths = async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const paths = data.map((post) => {
            return {
                  params:{id:post.id.toString()}
            }
      })
      return {
            paths,
            fallback:false
      }
}
export const getStaticProps = async ({ params }) => {
      const id = params.id;
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/"+id);
      return {
            props: {
                  data
            }
      }
   
}

const details = ({ data }) => {
      
      return (
            <>
                  <h1 className={styles.h1}>Blog by User {data.userId}</h1>
                  <div className={styles.post}>
                        <h3>
                              {data.title}
                        </h3>
                        <p>{data.body}</p>
                  </div>
            </>
          
      )
};

export default details;
