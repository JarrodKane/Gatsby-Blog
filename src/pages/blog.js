import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery, } from 'gatsby'

const BlogPage =() => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges{
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)



  return (
    <Layout>
      <h1>My Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>
                  {edge.node.frontmatter.title}
              </h2>
              <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage