module.exports = {
  siteMetadata: {
    title: "Michel Verjux",
    description: "Portfolio of Michel Verjux artist",
    author: "Hugo Lattard", 
    titleTemplate: "Michel Verjux", 
    url: "https://michel-verjux.com", 
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
  ],
};
