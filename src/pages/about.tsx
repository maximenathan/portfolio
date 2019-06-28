import Typography from '@material-ui/core/Typography'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import pathOr from 'ramda/es/pathOr'

interface AboutData {
  data: {
    allOwnerJson: {
      edges: {
        nodes: {
          firstname: string
          lastname: string
          born: string
          presentation: string
        }
      }
    }
  }
}

const OWNER_ABOUT = graphql`
  query {
    allOwnerJson {
      edges {
        node {
          firstname
          lastname
          born
          presentation
        }
      }
    }
  }
`

const About = () => {
  const data: AboutData = useStaticQuery(OWNER_ABOUT)
  const presentation = pathOr(
    '',
    ['allOwnerJson', 'edges', 'nodes', 'presentation'],
    data
  )

  console.log('content', presentation)
  return (
    <>
      <Typography>{presentation}</Typography>
    </>
  )
}
