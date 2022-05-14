import { Flex, Text, Image, Link, Heading } from '@chakra-ui/react'
import SectionWrapper from './SectionWrapper'
import { useLocale } from '../lib/hooks'

const Projects = ({ data }: { data: any }) => {
  const { t } = useLocale()
  return (
    <SectionWrapper title={t.projects.title} description={t.projects.description}>
      <Flex flexDir="row" flexWrap="wrap" justifyContent="space-evenly">
        {data.length > 0 &&
          data.map((service: any) => (
            <Flex
              key={service.title}
              flexDir={'column'}
              justifyContent="space-between"
              boxShadow={'md'}
              w="15rem"
              borderRadius={'10px'}
              p="2rem 1.5rem"
              m={'.5rem'}
            >
              <Text
                fontWeight={'600'}
                fontSize="1.3rem"
                textAlign="center"
                mb=".75rem"
                textTransform={'uppercase'}
              >
                {service.title}{' '}
              </Text>
              {/* <Image src={service.image} boxSize={['135px', '', '', '']} /> */}
              <Text fontSize=".9rem" mb=".75rem">
                {service.text}{' '}
              </Text>
              <Text fontSize=".9rem" mb=".75rem" textAlign={'left'}>
                {service.app}{' '}
              </Text>
              <Text
                as={Link}
                href={service?.link}
                fontWeight={'bold'}
                color={'accent_4'}
                textAlign="center"
              >
                Learn More
              </Text>
            </Flex>
          ))}
      </Flex>
    </SectionWrapper>
  )
}
export default Projects
