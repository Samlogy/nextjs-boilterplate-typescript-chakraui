import Head from 'next/head'
import { Container, Flex } from '@chakra-ui/react'

// import { BackTop } from '../components'
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
        <meta name="description" content="website description" />
        <meta name="og:title" content="website title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> website title </title>
      </Head>

      <Flex flexDir="column" {...restProps}>
        {/* {isHeaderVisible && <NavBar />} */}
        {/* <BackTop /> */}

        <Container
          maxW="80em"
          bg="white"
          minHeight="calc(100vh - 100px)"
          py="36px"
          px={['16px', '', '', '50px', '100px']}
        >
          {children}
        </Container>
        {/* {isFooterVisible && <Footer />} */}
      </Flex>
    </>
  )
}
