import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { FaUserAlt } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
import { CallToAction, PageTemplate, ScrollProgressIndicator } from '../../components'
import { GET_HOME_DATA } from '../../lib/services'

export default function Blog({ blog }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Learn more about ${blog.title} - Do you want quality IT services ?`}
        />
        <meta property="og:title" content={`${blog.title} - Web Solutions`} />
        <meta
          property="og:description"
          content={`Learn more about ${blog.title} - Do you want quality IT services ?`}
        />
        <meta property="og:url" content={`https://sam-solutions.com/blog/${blog.id}`} />
        <title>{blog.title} - Sam Solutions</title>
      </Head>

      <PageTemplate flexDir="column" title="Our Blog">
        <ScrollProgressIndicator />
        <Image src={blog?.image} mx="auto" w="full" h="20rem" mb="2rem" alt="blog-image" />

        <Heading fontSize="2rem" fontWeight={'600'} color={'accent_3'} mb="2rem">
          {blog?.title}
        </Heading>

        <Flex justify={'flex-start'} alignItems={'center'}>
          <Flex m="1rem 0 1.5rem 0">
            <MdDateRange size={18} color={'#38a169'} />
            <Box as="span" fontSize=".8rem" ml=".25rem" color={'gray_3'}>
              {blog?.createdAt}
            </Box>
          </Flex>

          <Flex m="1rem 0 1.5rem 1rem">
            <FaUserAlt size={14} color={'#38a169'} />
            <Box as="span" fontSize=".8rem" ml=".25rem" color={'gray_3'}>
              {blog?.author}
            </Box>
          </Flex>
        </Flex>

        <Box mt="2.5rem">
          {blog?.text.map((el, idx) => (
            <Text key={idx} fontSize={'1rem'} color={'gray_3'} mb="1rem">
              {el}
            </Text>
          ))}
        </Box>

        <CallToAction />
      </PageTemplate>
    </>
  )
}

export const getServerSideProps = async context => {
  const { blogs } = await GET_HOME_DATA()

  const blog = blogs.filter(blog => blog.id == context.params.blogId)[0]

  return {
    props: {
      blog
    }
  }
}
