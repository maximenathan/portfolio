import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'rebass'

import useScroll from '../../hooks/useScroll'
import useBoolean from '../../hooks/useBoolean'

import Title from './Title'
import Logo from './Logo'

export const HEADER_HEIGHT = 48

interface Props {
  title: string
  height?: number
}

interface AppBarProps {
  height?: number
  backgroundColor?: string
  hasScrolled: boolean
}

const AppBar = styled(Flex).attrs({
  as: 'header',
})<AppBarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  height: ${p => p.height || 64}px;

  background: ${p => p.backgroundColor || 'grey '};
  transition: background 250ms ease -in -out, box - shadow 250ms ease -in -out;

  .no-js & {
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
  }

  ${(p: AppBarProps) => {
    return (
      p.hasScrolled &&
      css`
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
      `
    )
  }};
`

const StyledBox = styled(Box)`
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
`

interface LogoProps {
  height: number
}

const StyledLogo = styled(Logo)<LogoProps>`
  height: ${p => p.height || 48}px;
`

const Header = ({ title, height = HEADER_HEIGHT }: Props) => {
  const scroll = useScroll()
  const hasScrolled = useBoolean()

  React.useEffect(() => {
    if (scroll > 0) {
      hasScrolled.setTrue()
    } else {
      hasScrolled.setFalse()
    }
  }, [scroll])

  return (
    <AppBar
      hasScrolled={hasScrolled.isTrue}
      height={height}
      backgroundColor={'#F0F0F0'}
    >
      <StyledBox>
        <Flex
          alignItems="center"
          justifyContent={['center', 'space-between']}
          p={1}
        >
          <StyledLogo height={height - 10} hasScrolled={hasScrolled.isTrue} />
          <Title title={title} hasScrolled={hasScrolled.isTrue} />
          <Box />
        </Flex>
      </StyledBox>
    </AppBar>
  )
}

export default Header
