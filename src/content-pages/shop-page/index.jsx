import React from 'react';
//  chakra-ui
import { SimpleGrid } from '@chakra-ui/react';
//  constants
import storefrontZazzle from '../../constants/storefront-zazzle';
//  local components
import ProductCard from './product-card';

const ContentShopPage = () => (
  <>
    <SimpleGrid columns={[1, null, 4]} spacing={4}>
      {storefrontZazzle.map((item, index) => (
        <ProductCard key={index} data={item} />
      ))}
    </SimpleGrid>
  </>
);

export default ContentShopPage;
