<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>

# Peter Bartels Blog

*Kick off your blog with this repository, feel free to use it for your own blog.*

*2020: this is a work in progress*

## Creates a static website that can be hosted in a serverless architecture and uses a headless CMS

***It's using:***  

- Gatsbyjs with plugins:
  - image processing
  - mdx
  - font loader / icons
  - helmet
  - typescript
  - Styled components
  - Rebassjs
- sanity
  
**Page content is stored in MDX (JSX+markdown) files and organized content using a free account on https://sanity.io**

# 🚀 Quick start

Cuurently my personal (public) sanity information is configured

Change the following file to update it with your own options:

`gatsby-config.js`


```js
{
resolve: 'gatsby-source-sanity',
  options: {
    projectId: 'xw24a3gm',
    dataset: 'production',

    // currenyly this is a public dataset
    // if you have a private dataset
    // token: process.env.MY_SANITY_TOKEN,
  }
}
```

To start developing:  

`yarn start`  

or

`gatsby develop`

To edit content such as your personal information, resume, projects, educaction etc.  

`cd sanity`  

`yarn start`  

or

`sanity start`  

***please see the gatsby and sanity docs for more information***  

# Deploy:

`sanity deploy` deploy content  
  
`gatsby deploy` generate a static site for deployment  





