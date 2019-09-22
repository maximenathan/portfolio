import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 2000px;
  background-color: #f0f0f0;
`

import Footer from './index'

const ControlledFooter = () => {
  return (
    <Wrapper>
      <Footer title="Maxime Soufflet" />
    </Wrapper>
  )
}

storiesOf(`Footer`, module).add(`default`, () => <ControlledFooter />)
