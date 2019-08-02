import React from 'react'
import Layout from '../components/layout'

import nick from './cage_geek.jpg'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1>Page not found</h1>
            <img src={nick} />
        </Layout>
    )
}

export default NotFound;