import React from 'react';
//  components
import Seo from '../components/seo';
//  content
import ContentTikTokBio from '../content-pages/tik-tok-bio';
//  content-seo
import descriptionSeo from '../content-pages/tik-tok-bio/seo/description';

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
  <Seo description={descriptionSeo} location={location} title="Tik Tok Bio" />
);
