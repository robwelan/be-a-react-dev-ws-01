import React from 'react';
//  components
import Seo from '../../components/seo';
//  content
import ContentJAT from '../../content-apps/felony-charges-of-donald-j-trump';

const PageJAT = ({ location }) => <ContentJAT location={location} />;

export default PageJAT;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => <Seo location={location} title="Felony Counts Of Donald J Trump" />;
