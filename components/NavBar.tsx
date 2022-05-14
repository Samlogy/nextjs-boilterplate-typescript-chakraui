import { Box, Button, Flex, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from "next/router"
import React, { useState } from 'react'
import { MdMenu, MdOutlineClose } from 'react-icons/md'
import { useLocale } from '../lib/hooks'
import { Logo } from '../public/Icons'
import LanguageSwitcher from './LanguageSwitcher'

interface IMenuItem {
  children: any
  to: any
  rest?: any
}
interface IMenuToggle {
  toggle: any
  isOpen: boolean
}
interface INavBarContainer {
  children: any
}

const NavBar = () => {
  const { t } = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer>
      <Link href="/" passHref>
        <Logo />
      </Link>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

const MenuToggle = ({ toggle, isOpen }: IMenuToggle) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <MdOutlineClose size={28} /> : <MdMenu size={28} />}
    </Box>
  )
}

const MenuItem = ({ children, to = '/', ...rest }: IMenuItem) => {
  return (
    <Box
      display="block"
      textAlign={'center'}
      minW="5rem"
      ml=".5rem!important"
      {...rest}
      _hover={{ textDecor: 'underline', fontWeight: '600' }}
    >
      <Link href={to}>{children}</Link>
    </Box>
  )
}

const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {
  const { t } = useLocale()
  const LINKS = [
    {
      url: '/',
      label: t.menu.home
    },
    {
      url: '/services',
      label: t.menu.services
    },
    {
      url: '/blogs',
      label: t.menu.blogs
    }
  ]
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        {LINKS.map((el, idx) => (
          <MenuItem key={idx} to={el.url}>
            {el.label}
          </MenuItem>
        ))}

        <Box
          display="block"
          _hover={{ cursor: 'pointer', fontWeight: '600', textDecor: 'underline' }}
          textAlign={'center'}
          minW="5rem"
          ml=".5rem!important"
        >
          <Link href={'#contact'}>{t.menu.contacts}</Link>
        </Box>

        <LanguageSwitcher />

        <Button
          bg={'white'}
          borderRadius={'10px'}
          color={'accent_3'}
          _hover={{ bg: 'accent_7', textDecor: 'none' }}
        >
          <Link href="tel:540498180"> +213 540498180 </Link>
        </Button>
      </Stack>
    </Box>
  )
}

const NavBarContainer = ({ children }: INavBarContainer) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={'1rem'}
      bg={'accent_4'}
      color={['white', 'white', 'primary.700', 'primary.700']}
      boxShadow={'md'}
    >
      {children}
    </Flex>
  )
}

export default NavBar

function NavLink({ href, exact, children, ...props }) {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    props.className += ' active'
  }

  return (
    <Link href={href}>
      <a className={isActive ? 'active-link' : ''}>{children}</a>
    </Link>
  )
}
