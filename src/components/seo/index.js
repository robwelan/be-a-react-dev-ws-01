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
  const {
    children,
    description,
    image,
    location,
    title: propsTitle,
    twitter_tags,
  } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
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
  const url = site.siteMetadata?.siteUrl;
  const metaDescription = description || site.siteMetadata.description;
  const twitterTags =
    twitter_tags && twitter_tags.length > 0 ? twitter_tags.join(', ') : '';
  const imageSrc = `${url}${image?.src}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={propsTitle || 'no props title'} />
      <meta property="og:description" content={metaDescription} />
      {image && image.src !== '' && (
        <meta property="og:image" content={imageSrc} />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url}${location?.pathname || '/'}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      {image && image.alt && (
        <meta name="twitter:image:alt" content={image.alt} />
      )}
      {image && image.src && (
        <meta name="twitter:image" content={imageSrc}></meta>
      )}
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
