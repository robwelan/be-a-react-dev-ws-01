import * as React from 'react';
//  gatsby
import { graphql, useStaticQuery } from 'gatsby';
//  components
import Seo from '../components/seo';
//  content
import ContentHomePage from '../content-pages/home-page';

const BlogIndex = ({ location }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { settings_publish: { eq: true } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              settings_featured_image {
                alt
                src
                title
              }
              date(formatString: "DD-MMM-YYYY")
              title
              categories
              settings_publish
            }
            timeToRead
            wordCount {
              paragraphs
              words
              sentences
            }
            excerpt(pruneLength: 250)
          }
        }
      }
    }
  `);

  return <ContentHomePage data={staticQuery} location={location} />;
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />;
