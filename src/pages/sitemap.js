import React from 'react';
//  components
import Seo from '../components/seo';
//  content
import ContentSitemap from '../content-pages/sitemap';
//  content-seo
import descriptionSeo from '../content-pages/sitemap/seo/description';

const PageSitemap = ({ location }) => <ContentSitemap location={location} />;

export default PageSitemap;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo description={descriptionSeo} location={location} title="Sitemap" />
);
