import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import ContentTutorials from '../../content-pages/tutorials';
//  content-seo
import descriptionSeo from '../../content-pages/tutorials/seo/description';

const PageTutorials = ({ location }) => <ContentTutorials location={location} />;

export default PageTutorials;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo description={descriptionSeo} location={location} title="Tutorials" />
);
