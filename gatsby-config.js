require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `OJ's OddJobs`,
    // Default title of the page
    siteTitleAlt: `OJ's Oddjobs Portfolio`,
    // Can be used for e.g. JSONLD
    siteHeadline: `OJ's OddJobs - bootstrapped by @SeanHAlexander from @lekoarts`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://jodie.lekoarts.de`,
    // Used for SEO
    siteDescription: `OJ's OddJobs Portfolio`,
    // Will be set on the html tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@SeanHAlexander`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `About`, slug: `/about` },
          { name: `Projects`, slug: `/projects` },
          { name: `Instagram`, slug: `/instagram` },
          { name: `Contact`, slug: `/contact` },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `32756026783`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jodie - @lekoarts/gatsby-theme-jodie`,
        short_name: `jodie`,
        description: `Owen's Oddjobs Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
  ],
};
