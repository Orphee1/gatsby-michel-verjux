module.exports = {
  siteMetadata: {
    title: "Michel Verjux",
    description: "Portfolio of Michel Verjux artist",
    author: "Hugo Lattard", 
    titleTemplate: "Michel Verjux", 
    siteUrl: "https://michel-verjux.com", 
    // image: "",  
    twitterUsername: `@HugoLattard`,

  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat', 'Roboto']
        }
      }
    }
  ],
};
