import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery, } from 'gatsby'

import blogStyles from './blog.module.scss'

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
          excerpt
        }
      }
    }
  }
  `)



  return (
    <Layout>
      <h1>My Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li key={edge.node.fields.slug} className={blogStyles.post}>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>
                  {edge.node.frontmatter.title}
              </h2>
              <p>{edge.node.frontmatter.date}</p>
              <p>{edge.node.excerpt}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage