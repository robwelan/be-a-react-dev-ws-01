import React from 'react';
//  components
import Seo from '../components/seo';
//  content
import ContentAboutPage from '../content-pages/about-page';
//  content-seo
import descriptionSeo from '../content-pages/about-page/seo/description';

const PageAbout = ({ location }) => <ContentAboutPage location={location} />;

export default PageAbout;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo description={descriptionSeo} location={location} title="About" />
);
