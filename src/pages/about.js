import React from 'react'
import Layout from '../components/layout'

import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
       <Head title="About" />
      <h1>About</h1>
      <p>Bio</p>
      <p>Check out my github <a href="https://github.com/Trojan-Cat" target="_blank">GitHub</a></p>
    </Layout>
  )
}

export default AboutPage;