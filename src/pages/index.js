import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Jarrod a front end developer</h2>
      <p>Check out my blog <Link to="/blog">Contact me</Link></p>
      <p>Check out my github<a href="https://github.com/Trojan-Cat" target="_blank">GitHub</a></p>

    </Layout>
  )
}

export default IndexPage;