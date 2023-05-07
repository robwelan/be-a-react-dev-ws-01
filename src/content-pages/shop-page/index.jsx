import React from 'react';
import renderHTML from 'react-render-html';
//  constants
import storefrontZazzle from '../../constants/storefront-zazzle';

const ContentShopPage = () => (
  <ul>
    {storefrontZazzle.map((item) => (
      <li>{renderHTML(item.link)}</li>
    ))}
  </ul>
);

export default ContentShopPage;
