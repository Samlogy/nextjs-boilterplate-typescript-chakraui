import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Box, Flex } from '@chakra-ui/react'

interface ILayout {
  children: React.ReactNode,
  isHeaderVisible?: boolean,
  isFooterVisible?: boolean,
  rest?: any
}

export default function Layout({ children, isHeaderVisible, isFooterVisible, ...rest }: ILayout) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ecommerce Web App" />
        <meta name="og:title" content='Ecommerce Web App' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Next.js Boilerplate </title>
      </Head>

      <Flex flexDir="column" {...rest}>
        {/* { isHeaderVisible && <NavBar /> } */}
          <Container maxW="1024px" bg="#FFFC" minHeight='calc(100vh - 100px)' py="36px" px={["16px","","","50px", "100px"]} borderRadius="4px">
            {children}
          </Container>
        {/* { isFooterVisible && <Footer /> } */}
      </Flex>
    </>
  )
}