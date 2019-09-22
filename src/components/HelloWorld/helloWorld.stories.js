import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import data from '../../data/owner/data'

import HelloWorld from './index'

const Wrapper = styled.div`
  height: 2000px;
  background-color: #f0f0f0;
`

const interests = [
  {
    type: 'hobby',
    name: 'Photography',
    qualifiers: ['enjoying', 'learning'],
  },
  {
    type: 'hobby',
    name: 'Lifting',
    qualifiers: ['love'],
  },
]

const ControlledHelloWorld = () => {
  console.log(data)
  return (
    <Wrapper>
      <HelloWorld presentation={data.presentation} interests={data.interests} />
    </Wrapper>
  )
}

storiesOf(`HelloWorld`, module).add(`default`, () => (
  <ControlledHelloWorld name={'My name'} interests={interests} />
))
