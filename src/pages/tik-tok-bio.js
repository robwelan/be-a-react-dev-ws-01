import React from 'react';
//  components
import Seo from '../components/seo';
//  content
import ContentTikTokBioPage from '../content-pages/tik-tok-bio';

const PageAbout = ({ location }) => (
  <ContentTikTokBioPage location={location} />
);

export default PageAbout;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo location={location} title="Tik Tok Bio" />
);
