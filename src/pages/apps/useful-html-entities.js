import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import Content from '../../content-apps/useful-html-entities';
//  content-seo
import descriptionSeo from '../../content-apps/useful-html-entities/seo/description';

const Page = ({ location }) => <Content location={location} />;

export default Page;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo
    description={descriptionSeo}
    location={location}
    title="Useful HTML Entities"
  />
);
