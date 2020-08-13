import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        path
      }
    }
  }
`
const Blog = ({ data }) => {
  const { html } = data.markdownRemark
  const { date, path, title } = data.markdownRemark.frontmatter
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  console.log(data)
  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export default Blog
