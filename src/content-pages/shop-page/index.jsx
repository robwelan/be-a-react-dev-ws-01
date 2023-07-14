import React from 'react';
//  chakra-ui
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
//  constants
import storefrontZazzle from '../../constants/storefront-zazzle';
//  local components
import ProductCard from './product-card';

const ContentShopPage = () => (
  <>
    <Heading as="h2" size="md">
      Mugs
    </Heading>
    <SimpleGrid columns={[1, null, 4]} spacing={4}>
      {storefrontZazzle.mugs.map((item, index) => (
        <ProductCard key={index} data={item} />
      ))}
    </SimpleGrid>
    <Box height="1em" />
    <Heading as="h2" size="md">
      Stickers
    </Heading>
    <SimpleGrid columns={[1, null, 4]} spacing={4}>
      {storefrontZazzle.stickers.map((item, index) => (
        <ProductCard key={index} data={item} />
      ))}
    </SimpleGrid>
    <Box height="1em" />
    <Heading as="h2" size="md">
      T-Shirts
    </Heading>
    <SimpleGrid columns={[1, null, 4]} spacing={4}>
      {storefrontZazzle.tshirts.map((item, index) => (
        <ProductCard key={index} data={item} />
      ))}
    </SimpleGrid>
  </>
);

export default ContentShopPage;
