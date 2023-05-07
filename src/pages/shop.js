import React from 'react';
//  components
import Seo from '../components/seo';
//  content
import ContentShopPage from '../content-pages/shop-page';

const BlogIndex = ({ location }) => <ContentShopPage location={location} />;

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All products" />;
