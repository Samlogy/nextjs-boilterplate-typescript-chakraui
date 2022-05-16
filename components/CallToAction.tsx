import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import Link from 'next/link'

import { useLocale } from '../lib/hooks'

function CallToAction() {
  const { t } = useLocale()
  return (
    <Flex justify={'center'} align="center" mt="2rem">
      <Button bg={'accent_3'} color={'white'} _hover={{ bg: 'accent_5' }}>
        <Link href="#contact">
          <a>{t.globals.call_to_action}</a>
        </Link>
      </Button>
    </Flex>
  )
}

export default CallToAction
