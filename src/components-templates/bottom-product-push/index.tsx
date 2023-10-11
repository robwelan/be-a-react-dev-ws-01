import React from 'react';
import random from 'random';
//  chakra-ui
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
//  components
import StandardDivider from '../../components/standard-divider';
//  constants
import storefrontZazzle from '../../constants/storefront-zazzle';

const ProductPush = () => {
  const products = storefrontZazzle.products();
  const product = products[random.int(0, products.length - 1)];

  return (
    <>
      <StandardDivider />
      <Heading as="h2" fontSize="125%">
        Get Cool Swag
      </Heading>
      <Text fontSize="80%">
        If you are finding this content useful (or maybe you are just a nice
        person or maybe you just like my merch) I would be greatful if you
        headed over to my shop and make a purchase or two. All proceeds will go
        towards making more courses.
      </Text>
      <Text fontSize="80%">
        If there’s merch missing that you would like, let me know (click this:{' '}
        <Link
          href="mailto:rob.welan@beareact.dev?subject=beareactdev-make-this-product"
          isExternal
        >
          Make Something For Me <ExternalLinkIcon />
        </Link>
        ) and I’ll try to make it for you.
      </Text>
      <Box height="1em" />
      <Stack spacing="4">
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          size="xs"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '100px' }}
            src={product.asset.image.src}
            alt={product.asset.image.alt}
          />

          <Stack p={4}>
            <CardHeader>
              <Heading as="h2" fontSize="125%" marginTop="0.4em">
                {product.asset.name}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="80%" py="2">
                You can buy this product or you can check out my shop of
                products.
              </Text>
            </CardBody>

            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  as={Link}
                  href={product.asset.uri}
                  isExternal
                  variant="solid"
                  colorScheme="blue"
                  marginBottom="0.4em"
                  size="xs"
                >
                  Buy Me <ExternalLinkIcon marginLeft="0.4em" />
                </Button>
                <Button
                  as={Link}
                  href="https://beareact.dev/shop/"
                  isExternal
                  variant="solid"
                  colorScheme="yellow"
                  marginBottom="0.4em"
                  size="xs"
                >
                  My Shop <ExternalLinkIcon marginLeft="0.4em" />
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Stack>
        </Card>
      </Stack>
    </>
  );
};

export default ProductPush;
