module.exports = {
  siteMetadata: {
    title: "JavaScript Fundamentals, v3",
    subtitle: "Become Productive with JavaScript",
    author: "Bianca Gandolfo",
    authorSubtitle: "Thumbtack",
    authorImage: "author.jpg", // this image should go in /static
    courseImage: "courseImage.jpg", // this also should go in /static
    twitter: "https://twitter.com/BiancaGando", // make empty string to omit socials
    linkedin: "https://www.linkedin.com/in/bgando",
    github: "https://github.com/bgando",
    description:
      "Learn the fundamentals of JavaScript with Bianca Gandolfo",
    keywords: [
      "javascript",
      "js",
      "javascript fundamentals"
    ],
  },
  pathPrefix: "/javascript-fundamentals-v3", // if you're using GitHub Pages, put the name of the repo here with a leading slash
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
  ],
};
