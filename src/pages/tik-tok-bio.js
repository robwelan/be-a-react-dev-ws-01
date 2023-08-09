import React from 'react';
//  components
import Seo from '../components/seo';
//  content
import ContentTikTokBio from '../content-pages/tik-tok-bio';

const PageTikTokBio = ({ location }) => (
  <ContentTikTokBio location={location} />
);

export default PageTikTokBio;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo location={location} title="Tik Tok Bio" />
);
