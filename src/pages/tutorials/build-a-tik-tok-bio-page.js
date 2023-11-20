import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import ContentTutorial from '../../content-pages/tutorials/tik-tok-bio-page';
//  content-seo
import descriptionSeo from '../../content-pages/tutorials/tik-tok-bio-page/seo/description';

const PageTutorial = ({ location }) => <ContentTutorial location={location} />;

export default PageTutorial;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo description={descriptionSeo} location={location} title="Tutorial: build a Tik Tok Bio Page in Chakra-UI for React" />
);
