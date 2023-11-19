import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import ContentTutorial from '../../content-pages/tutorials/rock-paper-scissors-game-with-react';
//  content-seo
import descriptionSeo from '../../content-pages/tutorials/rock-paper-scissors-game-with-react/seo/description';

const PageTutorial = ({ location }) => <ContentTutorial location={location} />;

export default PageTutorial;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo description={descriptionSeo} location={location} title="Tutorial: build a Rock Paper Scissors Game with React" />
);
