import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import ContentEmoji from '../../content-apps/emojis';
//  content-seo
import descriptionSeo from '../../content-apps/emojis/seo/description';

const PageEmoji = ({ location }) => <ContentEmoji location={location} />;

export default PageEmoji;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo
    description={descriptionSeo}
    location={location}
    title="Emojis"
  />
);
