import React from 'react';
//  chakra-ui
import { Box, Divider, Heading, SimpleGrid } from '@chakra-ui/react';
//  constants
import { shopAmazon } from '../../constants/affiliate-marketing-amazon/links';
import storefrontZazzle from '../../constants/storefront-zazzle';
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
        <Box height="1em" />
      </>
    )}
    <Heading as="h2" size="md">
      New Store!
    </Heading>
    <Box minHeight="2em">
      <div id="my-store-102418506"></div>
      <div>
        <script
          data-cfasync="false"
          type="text/javascript"
          src="https://app.ecwid.com/script.js?102418506&data_platform=code&data_date=2024-04-16"
          charSet="utf-8"
        ></script>
        <script type="text/javascript">
          {' '}
          xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60)
          table(60)","categoryView=grid","searchView=list","id=my-store-102418506");
        </script>
      </div>
    </Box>
    <Divider orientation="horizontal" />
    <Heading as="h2" size="md">
      Christmas
    </Heading>
    <SimpleGrid columns={[1, null, 4]} spacing={4}>
      {storefrontZazzle.xmas.map((item, index) => (
        <ProductCard key={index} data={item} />
      ))}
    </SimpleGrid>
    <Box height="1em" />
    <Heading as="h2" size="md">
      Glasses
    </Heading>
    <SimpleGrid columns={[1, null, 4]} spacing={4}>
      {storefrontZazzle.glasses.map((item, index) => (
        <ProductCard key={index} data={item} />
      ))}
    </SimpleGrid>
    <Box height="1em" />
    <Heading as="h2" size="md">
      Magnets
    </Heading>
    <SimpleGrid columns={[1, null, 4]} spacing={4}>
      {storefrontZazzle.magnets.map((item, index) => (
        <ProductCard key={index} data={item} />
      ))}
    </SimpleGrid>
    <Box height="1em" />
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
      Sports
    </Heading>
    <SimpleGrid columns={[1, null, 4]} spacing={4}>
      {storefrontZazzle.sports.map((item, index) => (
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
