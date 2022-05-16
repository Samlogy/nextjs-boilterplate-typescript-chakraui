import { Flex, Text, Image, Box } from '@chakra-ui/react'
import { FaUserAlt } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
import Link from 'next/link'
import { useLocale } from '../lib/hooks'

const Blog = ({ data }: { data: any }) => {
  const { t } = useLocale()
  return (
    <Link href={`/blog/${data.id}`} passHref>
      <Flex
        _hover={{ textDecor: 'none' }}
        flexDir={'column'}
        justifyContent="space-between"
        boxShadow={'md'}
        w="20rem"
        borderRadius={'10px'}
        m={'.5rem'}
      >
        <Image src={data.image} mx="auto" w="full" h="10rem" alt="blog-image" />

        <Flex flexDir={'column'} justifyContent="space-between" p="2rem 1.5rem">
          <Flex justify={'space-between'} alignItems={'center'}>
            <Flex m="1rem 0 1.5rem 0">
              <MdDateRange size={17} color={'#38a169'} />
              <Box as="span" fontSize=".8rem" ml=".2rem" color={'gray_4'}>
                {data.createdAt}
              </Box>
            </Flex>

            <Flex m="1rem 0 1.5rem 0">
              <FaUserAlt size={14} color={'#38a169'} />
              <Box as="span" fontSize=".8rem" ml=".2rem" color={'gray_4'}>
                {data.author}
              </Box>
            </Flex>
          </Flex>

          <Text
            fontWeight={'600'}
            fontSize="1.2rem"
            textAlign="center"
            mb=".75rem"
            textTransform={'uppercase'}
          >
            {data.title}
          </Text>
          <Text fontSize=".9rem" mb=".75rem" color={'gray_4'} isTruncated>
            {data.text}
          </Text>
          <Text fontWeight={'bold'} color={'accent_4'} textAlign="center">
            {t.globals.learn_more}
          </Text>
        </Flex>
      </Flex>
    </Link>
  )
}

export default Blog
