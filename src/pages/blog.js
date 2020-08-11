import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  /*
const data = useStaticQuery(graphql`

  query{
    allContentfulBlogPost (sort: {
      fields: publishDate,
      order: DESC } ) {
        edges {
          node {
            title
            slug
            type
            publishDate (formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
  
  
  `)
  */
  return (
    <>
      <h1 style={{ color: "black" }}>Blog is currently under development</h1>
      <a
        style={{ color: "blue" }}
        href="https://github.com/Trojan-Cat/Gatsby-Blog"
        rel="nofollow"
      >
        Keep up to date with changes on my Github
      </a>
    </>
  )
  /*
  return (
    <Layout>
      <Head title="Blog" />
      <h1>My Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li key={edge.node.slug} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>
                  {edge.node.type} : {edge.node.publishDate}
                </p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
  */
}

export default BlogPage
