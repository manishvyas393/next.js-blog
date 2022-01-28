import Title from "../components/Title";
import axios from "axios";
import Link from "next/link";
import { SimpleGrid, Heading, Flex, Box, Text } from "@chakra-ui/react";
export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <Title heading="Home Page" />
      <Heading textAlign="center" mb={5} p={10} fontSize="58px" color="gray.700">Our Blogs</Heading>
      <SimpleGrid columns={3} minChildWidth="430px" spacing={10} mx={50} justifyItems="center">
        {
          data.map((post, i) => (
            <Link href={"/post/" + post.id} key={post.id}>
              <Box boxShadow="dark-lg" p={5} width={400} borderRadius="xl">
                <Heading color="blue.300" mb={5} textAlign="center" fontSize="35px">{post.title}</Heading>
                <Text fontSize="25px">{post.body}</Text>
              </Box>
            </Link>
          ))
        }
      </SimpleGrid>
    </>
  )
}
export async function getStaticProps() {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")

  return {
    props: {
      data
    },
    revalidate: 10
  }
}