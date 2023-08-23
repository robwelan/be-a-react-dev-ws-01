import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import ContentToDo from '../../content-apps/to-do';

const PageToDo = ({ location }) => <ContentToDo location={location} />;

export default PageToDo;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => <Seo location={location} title="To Do" />;
