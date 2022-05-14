import { Heading, Flex, Divider, Box, Text } from '@chakra-ui/react'

interface ISectionWrapper {
  children: React.ReactNode
  title?: string
  description?: string
  [restPorps: string]: any
}

const SectionWrapper = ({ children, title, description, ...restPorps }: ISectionWrapper) => {
  return (
    <Flex flexDir="column" p="4rem 1.5rem" {...restPorps}>
      <Box textAlign={'center'}>
        <Heading
          fontSize="24px"
          mb="1rem"
          textTransform="uppercase"
          w={['15rem', '20rem', '', '']}
          mx="auto"
          wordBreak={'keep-all'}
        >
          {title}
        </Heading>
        <Divider
          w="10rem"
          borderColor="accent_4"
          borderWidth="2px"
          bg="accent_4"
          borderRadius={'10px'}
          m="0 auto 1rem auto"
        />
        <Text textAlign={'center'} color="gray_5" mb="2rem">
          {description}
        </Text>
      </Box>
      {children}
    </Flex>
  )
}

export default SectionWrapper
