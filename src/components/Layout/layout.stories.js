import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import Header from '../Header'

import Layout from './index'

const Wrapper = styled.div`
  height: 2000px;
  width: 100%;
  background-color: red;
`

const ControlledLayout = () => {
  const Content = () => <Wrapper>Test example</Wrapper>
  return (
    <Layout header={<Header title={'Title example'} />} content={<Content />} />
  )
}

storiesOf(`Layout`, module).add(`default`, () => <ControlledLayout />)
