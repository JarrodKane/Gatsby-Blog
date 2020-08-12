import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home">
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <h1>Welcome to my domain</h1>
      <h2>
        I'm Jarrod I'm a front end developer, podcaster, and wannabe athelete
      </h2>
      <p>
        This is a site where I'll share my thoughts on programming, MMA/BJJ,
        healthy living, and bad movies
      </p>
    </Layout>
  )
}

export default IndexPage
