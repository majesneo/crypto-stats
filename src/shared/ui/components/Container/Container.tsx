import React, { ReactNode } from 'react'
import { StyledContainer } from './style'

export type ContainerProps = { children: ReactNode, bgColor?: string }

const Container = ({ children, bgColor }: ContainerProps) => {
  return (
    <StyledContainer bgColor={bgColor}>{children}</StyledContainer>
  )
}

export default Container