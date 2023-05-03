import React from "react"
//  chakra-ui
import { Box, HStack } from "@chakra-ui/react"
//  gatsby
import { Link } from "gatsby"
//  components
import FeaturedImage from "../../../components/feaured-image"
//  local components
import HeaderSansImage from "./header-sans-image"
import HeaderWithImage from "./header-with-image"
//  utiltities
import getRemoveLeadAndEndCharacter from "../../../utilities/strings/remove-lead-and-end-character"

const BlogPost = props => {
  const { post } = props
  const title = post.frontmatter.title || post.fields.slug

  return (
    <li>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <>
          {post.frontmatter.settings_featured_image.src === "" && (
            <HeaderSansImage post={post} title={title} />
          )}
          {post.frontmatter.settings_featured_image.src !== "" && (
            <HeaderWithImage post={post} title={title} />
          )}
        </>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </li>
  )
}

export default BlogPost
