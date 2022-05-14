import Head from 'next/head'
import { Container, Flex } from '@chakra-ui/react'

import { NavBar, Footer, Contact, BackTop } from '../components'
interface ILayout {
  children: React.ReactNode
  isHeaderVisible?: boolean
  isFooterVisible?: boolean
  [restPorps: string]: any
}

export default function Layout({
  children,
  isHeaderVisible,
  isFooterVisible,
  ...restProps
}: ILayout) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Sam solutions" />
        <meta name="og:title" content="Sam solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Sam Solutions </title>
      </Head>

      <Flex flexDir="column" {...restProps}>
        {isHeaderVisible && <NavBar />}
        <BackTop />

        <Container
          maxW="80em"
          bg="white"
          minHeight="calc(100vh - 100px)"
          py="36px"
          px={['16px', '', '', '50px', '100px']}
        >
          {children}
          <Contact />
        </Container>
        {isFooterVisible && <Footer />}
      </Flex>
    </>
  )
}
