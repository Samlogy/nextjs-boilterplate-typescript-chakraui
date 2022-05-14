import React, { ReactNode } from 'react'
import { Flex, Heading } from '@chakra-ui/react'

import { Layout } from '../components'

interface IPageTemplate {
  isHeaderVisible?: boolean
  isFooterVisible?: boolean
  title: string
  children: React.ReactNode
  [key: string]: any
}

const PageTemplate = ({
  isHeaderVisible,
  isFooterVisible,
  title,
  children,
  ...rest
}: IPageTemplate) => {
  return (
    <Layout isHeaderVisible isFooterVisible>
      <Flex flexDir="column" justifyContent={'center'} alignItems={'center'}>
        <Heading fontSize="2rem" color={'accent_4'} textTransform="uppercase" m="2rem 0 2.5rem 0">
          {title}
        </Heading>
        <Flex {...rest}>{children}</Flex>
      </Flex>
    </Layout>
  )
}
export default PageTemplate
