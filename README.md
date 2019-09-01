# Vue JS Wordpress starter for Gridsome SASS-SCSS enabled

Avivo theme Demo: https://priceless-nobel-a7290d.netlify.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/832d4d3e-5b8c-4567-9d76-720e8323c4ef/deploy-status)](https://app.netlify.com/sites/priceless-nobel-a7290d/deploys)

Sass/Scss version with Bootstrap 4 and bootstrap-vue

https://bootstrap-vue.js.org/docs

Enabled for sass/scss in gridsome.config.js file and chainwebpack


## Install & Todo

Install Gridsome first, then clone repo and run yarn.
Can swap out nav, header, footer for your own.
Just change nav and page templates to yours, header and footer in components folder.
4 pages made, Home, About, Blog/News and Contact
Some extra assets in images and img folder, not used yet, and included original NPM and HtML files.



## Guide

Add your WordPress URL to the plugin options. Already done here, change to required field in gridsome.config and netlify.toml

```js
// gridsome.config.js

module.exports = {
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'YOUR_WEBSITE_URL', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        routes: {
          post: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
          post_tag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
        }
      }
    }
  ]
}

```

See all [options](https://gridsome.org/plugins/@gridsome/source-wordpress).

## Included templates

This starter includes basic templates for categories, tags and posts, Home, About and News page.
