import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import ContentToDo from '../../content-apps/to-do';
//  content-seo
import descriptionSeo from '../../content-apps/to-do/seo/description';

const PageToDo = ({ location }) => <ContentToDo location={location} />;

export default PageToDo;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo
    description={descriptionSeo}
    location={location}
    title="To Do"
  />
);
