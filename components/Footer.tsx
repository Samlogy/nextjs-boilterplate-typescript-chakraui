import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  useToast
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ErrorMessage } from '../components'
import { subscribeSchema } from '../lib/validation'
import { Logo } from '../public/Icons'
import { SUBSCRIBE } from '../lib/services'
import { useLocale } from '../lib/hooks'

interface ISocialButton {
  children: ReactNode
  label: string
  href: string
}

export default function Footer() {
  const { t } = useLocale()

  const textColor = useColorModeValue('black', 'gray.100')
  const bgColor = useColorModeValue('gray.100', 'gray.700')
  const borderColor = useColorModeValue('gray.300', 'gray.600')

  return (
    <Box bg={bgColor} color={textColor}>
      <Flex justify={['space-between']} align={'center'} flexWrap="wrap" p=".5rem 1rem">
        <Flex flexDir={'column'}>
          <Box mb="1rem">
            <Logo />
          </Box>
          <Subscribe />
        </Flex>

        <SocialMedia />
      </Flex>
      <Box
        borderTop="1px solid"
        borderColor={borderColor}
        p="1rem"
        fontSize=".8rem"
        textAlign={'center'}
      >
        <Text>
          EURL DZMOB, agence de développement web et mobile, inscrite au RCS de Versailles, n° 798
          748 133 – Capital : 3000€ – Siège social : 52, avenue de la république – 78500 –
          Sartrouville
        </Text>
      </Box>

      <Box borderTop="1px solid" borderColor={borderColor}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text fontSize=".8rem"> © 2022 Sam Solutions. {t.footer.rights} </Text>
          <Flex>
            <Box color="accent_1" fontSize=".8rem">
              <Link href="/conditions">{t.footer.conditions}</Link>
            </Box>
            <Text mx=".5rem" fontSize=".8rem">
              |
            </Text>
            <Box color="accent_1" fontSize=".8rem">
              <Link href="/privacy">{t.footer.privacy}</Link>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

const Subscribe = () => {
  const { t } = useLocale()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(subscribeSchema)
  })
  const inputColor = useColorModeValue('gray.200', 'gray.600')
  const toast = useToast()

  const onSubscribe = async data => {
    const res = await SUBSCRIBE(data)
    if (res) {
      toast({
        title: `Subscribed Successfully`,
        variant: 'left-accent',
        position: 'bottom-right',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
    } else {
      toast({
        title: `an Error occured`,
        variant: 'left-accent',
        position: 'bottom-right',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }
  return (
    <Flex flexDir={'column'} w="15rem" mb="1rem">
      <Heading size=".8rem" mb=".5rem" color="accent_2">
        {t.footer.subscribe_title}
      </Heading>
      <Flex
        justifyContent={'space-between'}
        bg={inputColor}
        p=".5rem"
        borderRadius={'10px'}
        w="15rem"
      >
        <form onSubmit={handleSubmit(onSubscribe)} style={{ display: 'flex' }}>
          <FormControl id="sub-email">
            <Input
              type="text"
              isInvalid={errors.email ? true : false}
              borderRadius="5px"
              size="md"
              bg="transparent"
              border="none"
              p="0"
              fontSize={'.85rem'}
              _focus={{ border: 'none' }}
              placeholder="Enter your email"
              {...register('email')}
            />
            {errors.email && <ErrorMessage error={errors.email.message} />}
          </FormControl>
          <Button
            type="submit"
            bg="accent_3"
            fontSize={'.9rem'}
            color="white"
            borderRadius={'10px'}
            _hover={{ bg: 'accent_3' }}
          >
            {t.footer.subscribe_button}
          </Button>
        </form>
      </Flex>
    </Flex>
  )
}
const SocialMedia = () => {
  const { t } = useLocale()
  return (
    <Flex flexDir={'column'} mb="1rem">
      <Heading size=".8rem" mb=".5rem" color="accent_2">
        {t.footer.reach}
      </Heading>
      <Flex
        flexDir={'row'}
        flexWrap="wrap"
        justifyContent={'space-between'}
        alignItems="center"
        w="10rem"
      >
        <SocialButton label={'Twitter'} href={'#'}>
          <FaTwitter />
        </SocialButton>

        <SocialButton label={'YouTube'} href={'#'}>
          <FaYoutube />
        </SocialButton>

        <SocialButton label={'Instagram'} href={'#'}>
          <FaInstagram />
        </SocialButton>
      </Flex>
    </Flex>
  )
}
const SocialButton = ({ children, label, href }: ISocialButton) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}
