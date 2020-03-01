<p align="center">
    <img alt="peter" src="https://media-exp1.licdn.com/dms/image/C4E03AQGGph95klM7mA/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=rF6h0EGkWcIXP1nA8lnABvTghpGU3iAXqfQ9_vSdnhI" width="60" />
</p>

# this is a work in progress!

# Peter Bartels Blog

*Kick off your blog with this repository, feel free to use it for your own.*

## Description

Creates a static website that can be hosted in a serverless architecture using a headless CMS (Gatsby)

***Stack***  

- Gatsbyjs
  - graphql
  - image processing
  - mdx
  - font loader / icons
  - helmet
  - typescript
  - Styled components
  - Rebassjs
  - functional typescript eslint rules
- sanity.io (for content editing)
  
- **Page content layout is stored in MDX (JSX+markdown) files**
- **Content/blog is stored at https://sanity.io (free account for small websites)**

# 🚀 Quick start

To start developing:  

`yarn start`  

or

`gatsby develop`

To edit content such as your personal information, resume, projects, educaction etc.  

`cd sanity`  

`yarn start`  

or

`sanity start`  

Currently my personal sanity information is configured, this is **public** so it will work

For your own account change the following file with your own projectId:

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

# Deploy:

`sanity deploy` deploy content  
  
`gatsby deploy` generate a static site for deployment  





