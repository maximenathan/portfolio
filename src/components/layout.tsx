/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import { graphql, Link, useStaticQuery } from 'gatsby'
import { pathOr } from 'ramda'
import React from 'react'
import styled from 'styled-components'

import Header from './header'

interface Data {
  GlobalJson: {
    title: string
  }
}

const TITLE = graphql`
  query GlobalTitleQuery {
    dataJson {
      title
    }
  }
`

interface Props {
  children: React.ReactChild
}

const Layout = (props: Props) => {
  const data: Data = useStaticQuery(TITLE)
  const title: string = pathOr('', ['dataJson', 'title'], data)

  return (
    <>
      <Header title={title} />
      {/*<header>{title}</header>*/}
      <main>{props.children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}
export default Layout
