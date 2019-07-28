
module.exports = {
  siteMetadata: {
    title: "Jarrods Blog",
    author: 'Jarrod Kane'
  },
  plugins: [
    'gatsby-plugin-sass', 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
