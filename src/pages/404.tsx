import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Header from '../components/Header'

const Content = () => (
  <>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

const NotFoundPage = () => (
  <Layout header={<Header title={'Error'} />} content={Content} />
)

export default NotFoundPage
