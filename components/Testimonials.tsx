import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useLocale } from '../lib/hooks'
import { IconReview } from '../public/Icons'
import homeImage from '../public/images/home.png'
import { CallToAction, SectionWrapper } from './'

const Testimonials = ({ data }: { data: any }) => {
  // const bgColor = useColorModeValue('gray_9', 'gray_2')
  const { t } = useLocale()
  return (
    <SectionWrapper title={t.testimonials.title} description={t.testimonials.description}>
      <Flex flexDir={'row'} flexWrap="wrap" justify={'center'}>
        {data.map((review, idx) => (
          <Review key={idx} data={review} />
        ))}
      </Flex>
      <CallToAction />
    </SectionWrapper>
  )
}

export default Testimonials

const Review = ({ data }: { data: any }) => {
  return (
    <Flex
      flexDir={'column'}
      justifyContent="center"
      alignItems={'center'}
      boxShadow={'md'}
      w="15rem"
      borderRadius={'10px'}
      p="1.5rem"
      m="1rem"
    >
      <Box mr="auto">
        <IconReview color="#38a169" />
      </Box>
      <Text my=".75rem" fontStyle={'italic'} textAlign="center" fontSize=".9rem">
        {data.review}
      </Text>
      <Image
        src={homeImage.src}
        alt={data.name}
        boxSize="100px"
        fallbackSrc="https://via.placeholder.com/100"
        borderRadius={'full'}
        my=".75rem"
        bg={'transparent'}
        border="2px solid"
        borderColor={'accent_4'}
        p=".25rem"
      />
      <Text fontSize=".9rem" textTransform={'uppercase'} fontWeight="600">
        {data.name}
      </Text>
      <Text fontSize=".9rem" textTransform={'uppercase'} fontStyle={'italic'} color={'#aaa'}>
        {data.position}
      </Text>
    </Flex>
  )
}
