import React from 'react';
//  components
import Seo from '../components/seo';
//  content
import ContentHome from '../content-pages/home';
//  content-seo
import descriptionSeo from '../content-pages/home/seo/description';

const PageHome = ({ location }) => <ContentHome location={location} />;

export default PageHome;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo description={descriptionSeo} location={location} title="Welcome!" />
);
