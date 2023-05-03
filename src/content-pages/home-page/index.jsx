import * as React from "react"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
//  blog post
import BlogPost from "./post"

const ContentHomePage = props => {
  const { data, location } = props

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => (
          <BlogPost key={post.fields.slug} post={post} />
        ))}
      </ol>
    </Layout>
  )
}

export default ContentHomePage
