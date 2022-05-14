import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import SectionWrapper from './SectionWrapper'
import { useLocale } from '../lib/hooks'

const About = ({ data }: { data: any }) => {
  const { t } = useLocale()
  return (
    <SectionWrapper title={t.about.title} description={t.about.description}>
      <Flex flexWrap="wrap" justifyContent={'space-around'}>
        <Image src={data?.image} alt="about image" boxSize="250px" />

        <Flex
          flexDir="column"
          justify={'center'}
          w={['80%', '', '40%', '']}
          mt={['1.5rem', '', '0rem', '']}
        >
          <Heading fontSize="1.8rem" fontWeight="700" mb="1rem" color="accent_4">
            {data?.title}
          </Heading>

          <Flex flexDir={'column'} lineHeight="1.5rem">
            {data?.text.map((el, idx) => (
              <Text key={idx} fontSize=".9rem" color="gray.500" mb={'1rem'}>
                {el}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </SectionWrapper>
  )
}
export default About
