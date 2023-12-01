import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import Content from '../../content-apps/weather';
//  content-seo
import descriptionSeo from '../../content-apps/weather/seo/description';

const PageContent = ({ location }) => <Content location={location} />;

export default PageContent;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo description={descriptionSeo} location={location} title="Weather" />
);
