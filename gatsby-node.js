const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/templates/blog.js")

  const res = await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  /*
  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      id: node.id,
      component: blogTemplate,
      path: `/blog/${node.frontmatter.path}`,
      context: {
        slug: node.frontmatter.path,
      },
    })
  })
  */
  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      component: blogTemplate,
      slug: node.frontmatter.path,
      path: `/blog/${node.frontmatter.path}`,
      context: {
        slug: node.frontmatter.path,
        id: node.id,
      },
    })
  })
}
