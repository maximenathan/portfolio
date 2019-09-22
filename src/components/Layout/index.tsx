import React from 'react'
import styled from 'styled-components'

import { GlobalStyle } from '../../theme/globalStyle'
import { HEADER_HEIGHT } from '../Header'
import Footer from '../Footer'

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  header: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

const MainWrapper = styled.div`
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-grow: auto;
  overflow: auto;
  padding-top: ${HEADER_HEIGHT}px;
  flex-grow: 1;
`

const Layout = ({ header, content }: Props) => {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        {header}
        <BodyWrapper>{content}</BodyWrapper>
        <Footer />
      </MainWrapper>
    </>
  )
}
export default Layout
