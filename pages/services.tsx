import React from 'react'
import { Divider, Flex, Heading, Image, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { PageTemplate } from '../components'
import { useWindowDimensions, useLocale } from '../lib/hooks'
import { GET_HOME_DATA } from '../lib/services'

function Services({ services }) {
  return (
    <PageTemplate flexDir="column" title="Our Services">
      {services?.map(service => (
        <Service key={service.id} data={service} />
      ))}
    </PageTemplate>
  )
}

export default Services

const Service = ({ data }: { data: any }) => {
  const { width } = useWindowDimensions()
  const { t } = useLocale()
  return (
    <Flex
      flexDir={'row'}
      _even={{ flexDir: 'row-reverse' }}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Flex flexDir={'column'} maxW={['100%', '', '60%', '']}>
        <Heading fontSize="2rem" fontWeight={'600'} color={'accent_4'} mb="2rem">
          {data?.id}
        </Heading>
        <Heading
          fontSize="2rem"
          fontWeight={'400'}
          color={'black'}
          textTransform="uppercase"
          mb="2rem"
        >
          {data?.title}
        </Heading>
        <Text fontSize={'1rem'} color={'gray_3'} mb="1rem">
          {data?.text}
        </Text>

        <Button bg={'accent_4'} color={'white'} _hover={{ bg: 'accent_5' }} mt="2rem" w="15rem">
          <Link href="#contact"> Start yout business now ! </Link>
        </Button>

        <Divider
          w="5rem"
          borderColor="accent_3"
          borderWidth="2px"
          bg="accent_3"
          borderRadius={'10px'}
          mt="2rem"
        />
      </Flex>

      {width >= 832 && (
        <Image src={data?.image} w="25vw" h="20vh" borderRadius={'10px'} alt="service-image" />
      )}
    </Flex>
  )
}

export async function getStaticProps() {
  const res = await GET_HOME_DATA()
  return {
    props: res
  }
}
