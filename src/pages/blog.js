import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

import blogStyles from "../styles/blog.module.scss"
import Head from "../components/head"
import BlogCard from "../components/blogCard.jsx"

const BlogPage = () => {
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
  return (
    <Layout>
      <Head title="Blog" />
      <h1>My Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <BlogCard
              key={edge.node.id}
              id={edge.node.id}
              path={`/blog/${edge.node.frontmatter.path}`}
              title={edge.node.frontmatter.title}
            />
            /* <li key={edge.node.id} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.frontmatter.path}`}>
                <h2>{edge.node.frontmatter.title}</h2>
              </Link>
            </li>
            */
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
