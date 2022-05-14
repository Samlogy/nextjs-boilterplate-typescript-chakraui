import React from 'react'
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'

type MyState = { scrolled: any }
class ScrollProgressIndicator extends React.Component {
  state = {
    scrolled: 0 as number
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollProgress)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollProgress)
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop
    const winHeightPx =
      document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`

    console.log(scrolled)

    this.setState({
      scrolled: scrolled
    })
  }

  render() {
    const scrolled = this.state.scrolled

    return (
      <div>
        <Box
          bg="#fff"
          boxShadow={'0 2px 4px rgba(0, 0, 0, 0.3)'}
          h="5px"
          w="100vw"
          top={0}
          left={0}
          zIndex={99}
          pos={'fixed'}
        >
          <Box h="5px" bg="#38a169" w={scrolled} />
        </Box>
      </div>
    )
  }
}

export default ScrollProgressIndicator
