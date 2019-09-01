import React, { FunctionComponent } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog: FunctionComponent = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog Items</h1>
    <p>This is my blog</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
