import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import ContentAI from '../../content-ai/job-description-generator';

const PageAI = ({ location }) => <ContentAI location={location} />;

export default PageAI;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo location={location} title="Job Description Generator">
    <meta name="description" content="A job description generator that is using artificial intelligence." />
  </Seo>
);
