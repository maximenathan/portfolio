import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 2000px;
  background-color: #f0f0f0;
`

import Header from './index'

const ControlledHeader = () => {
  return (
    <Wrapper>
      <Header title="Maxime Soufflet" />
    </Wrapper>
  )
}

storiesOf(`Header`, module).add(`default`, () => <ControlledHeader />)
