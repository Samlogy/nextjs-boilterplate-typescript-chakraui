import { Button, Heading, Flex, Text, Image, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { AiFillPhone } from 'react-icons/ai'

import { useLocale } from '../lib/hooks'
import homeImage from '../public/images/home.png'
import { TypeWritter } from '../components'

const Hero = () => {
  const { t } = useLocale()
  return (
    <Flex
      flexDir="row"
      flexWrap={'wrap-reverse'}
      justifyContent={['center', '', 'space-between', '']}
      py="2rem"
    >
      <Flex
        flexDir={'column'}
        alignItems="center"
        justifyContent={'center'}
        w={['30rem', '', '25rem', '']}
      >
        <Heading as="h1" mb="2rem" h="4rem">
          {t.hero.title}{' '}
          <Box as="span" color="accent_3">
            <TypeWritter loop={true} speed={100} delay={1500} words={['Web', 'Mobile.']} />
          </Box>
        </Heading>
        <Text mb="2rem">{t.hero.description}</Text>
        <Flex
          flexDir={['column', 'row']}
          alignItems={['center', 'none']}
          ml={['0', '', '2rem', '']}
        >
          <Button w="fit-content" bg="accent_3" color="white" _hover={{ bg: 'accent_5' }}>
            {t.hero.ask_estimate}
          </Button>

          <Button
            w="fit-content"
            mt={['1rem', '0rem']}
            bg="accent_3"
            color="white"
            _hover={{ bg: 'accent_5', textDecor: 'none' }}
            ml={['0rem', '1rem']}
            leftIcon={<AiFillPhone />}
          >
            <Link href="tel:540498180">
              <a>{t.hero.call_us}</a>
            </Link>
          </Button>
        </Flex>
      </Flex>
      <Image
        src={homeImage.src}
        boxSize={['18rem', '', '20rem', '']}
        mx={['auto', '', '0', '']}
        mb={['1rem', '', '0', '']}
        alt="hero-image"
      />
    </Flex>
  )
}
export default Hero
