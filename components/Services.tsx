import { Flex, Text, Image, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { SectionWrapper, CallToAction } from '../components'
import { useLocale } from '../lib/hooks'

const Services = ({ data }: { data: any }) => {
  const { t } = useLocale()
  return (
    <Link href={`/services`} passHref>
      <SectionWrapper title={t.services.title} description={t.services.description}>
        <Flex flexDir="row" flexWrap="wrap" justifyContent="space-evenly">
          {data.length > 0 &&
            data.map((service: any) => (
              <Flex
                key={service?.title}
                flexDir={'column'}
                justifyContent="center"
                alignItems={'center'}
                boxShadow={'md'}
                w="20rem"
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
                  {service?.title}
                </Text>
                <Image src={service?.image} boxSize={['135px', '', '', '']} alt="service-image" />
                <Text fontSize=".9rem" mb=".75rem" textAlign={'center'} color={'gray_3'}>
                  {service?.description}
                </Text>
                <Text fontWeight={'bold'} color={'accent_3'}>
                  Learn More
                </Text>
              </Flex>
            ))}
        </Flex>

        <CallToAction />
      </SectionWrapper>
    </Link>
  )
}

export default Services
