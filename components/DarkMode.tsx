import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function DarkMode() {
  const { colorMode: mode, toggleColorMode } = useColorMode()

  const bgColor = useColorModeValue('transparent', 'gray_3')
  const bgHoverColor = useColorModeValue('gray_8', 'gray_2')

  return (
    <IconButton
      aria-label="dark mode"
      bg={bgColor}
      _hover={{ bg: bgHoverColor }}
      onClick={() => toggleColorMode()}
      color={useColorModeValue('black', 'white')}
      icon={mode === 'light' ? <FiMoon /> : <FiSun />}
    />
  )
}
