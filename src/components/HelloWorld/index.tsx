import React from 'react'
import { pipe, map, defaultTo, flatten } from 'ramda'
import styled from 'styled-components'

import TransitioningWords from '../TransitioningWords'

enum InterestTypes {
  Hobby,
  work,
}

enum QualifierTypes {
  enjoying,
  learning,
  love,
  enthusiasm,
}

interface Interest {
  type: InterestTypes
  name: string
  qualifiers: QualifierTypes[]
}

interface Props {
  interests: Interest[]
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  &:nth-child(n) {
    white-space: pre;
  }
`

const HelloWorld = ({ interests }: Props) => {
  const prepareInterest = map((interest: Interest) =>
    map(qualifier => `${qualifier} ${interest.name}`)(interest.qualifiers)
  )

  //@ts-ignore
  const PreparedInterest: string[] = pipe(
    prepareInterest,
    flatten,
    defaultTo([])
  )(interests)
  const places: string[] = ['World!', 'Friends!', 'There!']

  return (
    <Wrapper>
      <Row>
        <div>Hello </div>
        <div>
          <TransitioningWords words={places} delay={5000} />
        </div>
      </Row>
      <Row>
        <div>{`I'm a French React developer and I `}</div>
        <div></div>
      </Row>
      <Row>
        <TransitioningWords words={PreparedInterest} delay={2000} />
      </Row>
    </Wrapper>
  )
}

export default HelloWorld
