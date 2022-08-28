import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { View, LanguageSwitcher } from '../components'
//import { Logo } from '../public/icons'

const Links = [
  {
    link: '/',
    name: 'Home'
  },
  {
    link: '/products',
    name: 'Products'
  },
  {
    link: '/contact',
    name: 'Contact Us'
  }
]

const NavLink = ({ children, link }: { children: ReactNode; link: string }) => {
  const { pathname } = useRouter()
  const isActive = pathname === `${link}`

  const textColor = useColorModeValue('black', '#edf2f7')

  return (
    <Link href={`${link}`}>
      <Box
        px={2}
        py={1}
        rounded={'md'}
        color={isActive ? 'accent_3' : textColor}
        _hover={{
          textDecoration: 'none',
          cursor: 'pointer',
          bg: useColorModeValue('gray.200', '#2D3748')
        }}
      >
        {children}
      </Box>
    </Link>
  )
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const bgColor = useColorModeValue('white', 'gray_2')

  return (
    <Box bg={bgColor} px={4} pos="fixed" w="full" boxShadow={'md'} zIndex="100">
      <Flex h={16} align={'center'} justify={'space-between'}>
        <IconButton
          size={'md'}
          icon={
            isOpen ? (
              <Flex justify={'center'} align="center">
                <AiOutlineClose />
              </Flex>
            ) : (
              <Flex justify={'center'} align="center">
                <AiOutlineMenu />
              </Flex>
            )
          }
          aria-label={'toggle-menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} align={'center'}>
          <Box>Logo</Box>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link: any) => (
              <NavLink key={link.link} link={link.link}>
                {link.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>

        <Flex align={'center'}>
          <LanguageSwitcher />
        </Flex>
      </Flex>

      <View cond={isOpen}>
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link: any) => (
              <NavLink key={link.link} link={link.link}>
                {link.name}{' '}
              </NavLink>
            ))}
          </Stack>
        </Box>
      </View>
    </Box>
  )
}
