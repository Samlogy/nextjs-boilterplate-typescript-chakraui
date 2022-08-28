import { Box } from '@chakra-ui/react'
import React from 'react'

interface IView {
  children: any
  cond: any
  [restProps: string]: any
}

export default function View({ children, cond, ...restProps }: IView) {
  if (cond) return <Box {...restProps}>{children}</Box>
  else return null
}
