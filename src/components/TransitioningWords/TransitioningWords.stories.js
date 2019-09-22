import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import TransitioningWords from './index'

const Wrapper = styled.div`
  height: 2000px;
  background-color: #f0f0f0;
`

const words = ['first', 'second', 'third']

const ControlledHeader = () => {
  return (
    <Wrapper>
      <TransitioningWords words={words} />
    </Wrapper>
  )
}

storiesOf(`Updating words`, module).add(`default`, () => <ControlledHeader />)
