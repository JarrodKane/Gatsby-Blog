
module.exports = {
  siteMetadata: {
    title: "Jarrods Blog",
    author: 'Jarrod Kane'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass', 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp', {
      resolve:  'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images', 
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
   
  ]
}
