import * as React from 'react';
//  gatsby
import { graphql } from 'gatsby';
//  components
import Seo from '../components/seo';
//  content
import ContentHomePage from '../content-pages/home-page';

const BlogIndex = ({ data, location }) => (
  <ContentHomePage data={data} location={location} />
);

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { settings_publish: { eq: true } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          meta_description
          meta_keywords
          settings_featured_image {
            alt
            src
            title
          }
          settings_include_in_fti
          settings_publish
          twitter_tags
          title
        }
      }
    }
  }
`;
