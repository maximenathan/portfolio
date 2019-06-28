import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import { pathOr } from 'ramda'
import { Typography } from '@material-ui/core'

interface AboutData {
    ownerJson: {
          firstname: string
          lastname: string
          born: string
          presentation: string
        }
}

const OWNER_ABOUT = graphql`
  query ownerInfos {
    ownerJson {
              firstname,
              lastname,
              born,
              presentation
    }
  }
`

const IndexPage = () => {
  const data: AboutData = useStaticQuery(OWNER_ABOUT)
  const presentation = pathOr('', ['ownerJson', 'presentation'], data)

  console.log(pathOr('', ['allOwnerJson', 'edges'], data))
  console.log('presentation', data, presentation)
  return (
    <Layout>
      <>
        <Typography>{presentation}</Typography>
      </>
    </Layout>
  )
}

export default IndexPage
