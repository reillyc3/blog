// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss")
module.exports = {
  siteName: 'Connor Reilly Resume',

  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
        host: "cdn.contentful.com",
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        typename: "Contentful"
      }
     
  
    }
    
      /* These are the default options. You don't need to set any options to get going.
      options: {
        tailwindConfig: './some/file/js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  }
}
