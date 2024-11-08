import React from 'react';
//  components
import Seo from '../components/seo';
//  content
import ContentShopPage from '../content-pages/shop-page';
//  content-seo
import descriptionSeo from '../content-pages/shop-page/seo/description';

const PageShop = ({ location }) => <ContentShopPage location={location} />;

export default PageShop;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }) => (
  <Seo description={descriptionSeo} location={location} title="All products" />
);
