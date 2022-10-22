module.exports = {
  siteMetadata: {
    title: `ornisoft`,
    siteUrl: `http://ornisoft.com/`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.5,
        once: true,
        disable: false,
        selector: "[data-sal]",
        animateClassName: "sal-animate",
        disabledClassName: "sal-disabled",
        rootMargin: "0% 50%",
        enterEventName: "sal:in",
        exitEventName: "sal:out",
      },
    },
  ],
};
