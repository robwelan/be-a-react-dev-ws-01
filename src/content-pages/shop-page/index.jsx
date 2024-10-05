import React from 'react';
//  chakra-ui
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
//  constants
import { shopAmazon } from '../../constants/affiliate-marketing-amazon/links';
import storefront from '../../constants/storefront';
//  local components
import ProductCard from './product-card';
import ProductAmazonProduct from './product-card-amazon-shop';

const ContentShopPage = () => (
  <>
    {shopAmazon.products.laptops && shopAmazon.products.laptops.length > 0 && (
      <>
        <Heading as="h2" size="md">
          Affiliate Links - Laptops
        </Heading>
        <SimpleGrid columns={[1, null, 4]} spacing={4}>
          {shopAmazon.products.laptops.map((item, index) => (
            <ProductAmazonProduct key={index} data={item} />
          ))}
        </SimpleGrid>
      </>
    )}

    {storefront && storefront.xmas && (
      <>
        <Box height="1em" />
        <Heading as="h2" size="md">
          Christmas
        </Heading>
        <SimpleGrid columns={[1, null, 4]} spacing={4}>
          {storefront.xmas.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </SimpleGrid>
      </>
    )}

    {storefront && storefront.glasses && (
      <>
        <Box height="1em" />
        <Heading as="h2" size="md">
          Glasses
        </Heading>
        <SimpleGrid columns={[1, null, 4]} spacing={4}>
          {storefront.glasses.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </SimpleGrid>
      </>
    )}

    {storefront && storefront.magnets && (
      <>
        <Box height="1em" />
        <Heading as="h2" size="md">
          Magnets
        </Heading>
        <SimpleGrid columns={[1, null, 4]} spacing={4}>
          {storefront.magnets.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </SimpleGrid>
      </>
    )}

    {storefront && storefront.mugs && (
      <>
        <Box height="1em" />
        <Heading as="h2" size="md">
          Mugs
        </Heading>
        <SimpleGrid columns={[1, null, 4]} spacing={4}>
          {storefront.mugs.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </SimpleGrid>
      </>
    )}

    {storefront && storefront.sports && (
      <>
        <Box height="1em" />
        <Heading as="h2" size="md">
          Sports
        </Heading>
        <SimpleGrid columns={[1, null, 4]} spacing={4}>
          {storefront.sports.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </SimpleGrid>
      </>
    )}

    {storefront && storefront.stickers && (
      <>
        <Box height="1em" />
        <Heading as="h2" size="md">
          Stickers
        </Heading>
        <SimpleGrid columns={[1, null, 4]} spacing={4}>
          {storefront.stickers.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </SimpleGrid>
      </>
    )}

    {storefront && storefront.tshirts && (
      <>
        <Box height="1em" />
        <Heading as="h2" size="md">
          T-Shirts
        </Heading>
        <SimpleGrid columns={[1, null, 4]} spacing={4}>
          {storefront.tshirts.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </SimpleGrid>
      </>
    )}
  </>
);

export default ContentShopPage;
