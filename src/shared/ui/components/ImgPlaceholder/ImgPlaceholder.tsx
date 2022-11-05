import React, { forwardRef } from "react"
import { StyledAnimatedBackground, StyledImgPlaceholder } from "./style"



export const ImgPlaceholder = forwardRef((props, ref) => {

  return (
    <StyledImgPlaceholder ref={ref}>
      <StyledAnimatedBackground ></StyledAnimatedBackground>
    </StyledImgPlaceholder>
  )
})