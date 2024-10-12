import React from 'react';
//  components
import Seo from '../components/seo';
//  content
import ContentResourcesPage from '../content-pages/resources-page';
//  content-seo
import descriptionSeo from '../content-pages/resources-page/seo/description';

const PageResources = ({ location }) => (
  <ContentResourcesPage location={location} />
);

export default PageResources;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo description={descriptionSeo} location={location} title="Resources" />
);
