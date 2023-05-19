/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
//  local utilities
import getHeadTitle from './get-head-title';

const Seo = (props) => {
  const { children, description, title: propsTitle, twitter_tags } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `,
  );

  const siteTitle = site.siteMetadata?.title;
  const title = getHeadTitle({ siteTitle, propsTitle });
  const metaDescription = description || site.siteMetadata.description;
  const twitterTags =
    twitter_tags && twitter_tags.length > 0 ? twitter_tags.join(', ') : '';

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={propsTitle || 'no props title'} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={propsTitle || 'no props title'} />
      {twitterTags === '' && (
        <meta name="twitter:description" content={metaDescription} />
      )}
      {twitterTags !== '' && (
        <meta
          name="twitter:description"
          content={`${metaDescription}\n${twitterTags}`}
        />
      )}

      {children}
    </>
  );
};

export default Seo;
