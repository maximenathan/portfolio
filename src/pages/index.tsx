import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { pathOr } from 'ramda'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Header from '../components/Header'
import HelloWorld from '../components/HelloWorld'
import useHeaderTitle from '../hooks/useHeaderTitle'

interface AboutData {
  ownerJson: {
    firstname: string
    lastname: string
    born: string
    presentation: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interests: any[]
  }
}

const OWNER_ABOUT = graphql`
  query ownerInfos {
    ownerJson {
      firstname
      lastname
      born
      presentation
      interests {
        type
        name
        qualifiers
      }
    }
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

const TitleWrapper = styled.div`
  overflow-wrap: normal;
  font-size: calc(12px + 3.3vw);
`

const PresentationWrapper = styled.p`
  font-size: calc(12px + 1.8vmin);
  overflow-wrap: normal;
`

const IndexPage = () => {
  const userData: AboutData = useStaticQuery(OWNER_ABOUT)
  const presentation = pathOr('', ['ownerJson', 'presentation'], userData)
  const interests = pathOr([], ['ownerJson', 'interests'], userData)
  const titleData = useHeaderTitle()

  const Content = () => (
    <ContentWrapper>
      <TitleWrapper>
        <HelloWorld interests={interests} />
      </TitleWrapper>
      <PresentationWrapper>{presentation}</PresentationWrapper>
    </ContentWrapper>
  )

  return <Layout header={<Header title={titleData} />} content={<Content />} />
}

export default IndexPage
