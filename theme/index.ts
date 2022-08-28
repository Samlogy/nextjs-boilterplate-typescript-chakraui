import { extendTheme } from '@chakra-ui/react'

import { breakpoints, colors, fonts } from './utilities'

const theme = extendTheme({
  colors,
  breakpoints,
  fonts,
  components: {
    // Steps
  }
})

export default theme
