import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
/*
export const query = graphql`
query($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    publishDate(formatString: "MMMM Do, YYYY")
    body { 
      json
    }
  }
}
`
*/
const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
          fileAbsolutePath
          rawMarkdownBody
        }
      }
    }
  }
`)

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishDate}</p>
      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
    </Layout>
  )
  /*
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishDate}</p>
      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
    </Layout>
  )
  */
}

export default Blog
