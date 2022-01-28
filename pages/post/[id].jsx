import { Box, Text, Heading } from "@chakra-ui/react";
import axios from "axios";
export const getStaticPaths = async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const paths = data.map((post) => {
            return {
                  params: { id: post.id.toString() }
            }
      })
      return {
            paths,
            fallback: false
      }
}
export const getStaticProps = async ({ params }) => {
      const id = params.id;
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
      return {
            props: {
                  data
            }
      }

}

const details = ({ data }) => {

      return (
            <>
                  <Heading textAlign="center" mb={5} p={10} fontSize="58px" color="gray.700">Blog By User {data.id}</Heading>
                  <Box boxShadow="dark-lg" p={5} width={400} borderRadius="xl" m="auto" mb={5}>
                        <Heading color="blue.300" mb={5} textAlign="center" fontSize="35px">{data.title}</Heading>
                        <Text fontSize="25px">{data.body}</Text>
                  </Box>
            </>

      )
};

export default details;
