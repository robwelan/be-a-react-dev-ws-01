import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Box,
  Center,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
//  constants
import linksSocial from '../../constants/social-links';
import linksToResources from '../../constants/resources-links';
//  hooks
import useSiteMetadata from '../../hooks/use-site-meta-data';
//  local components
import ListHeader from './list-header';
import LogoIcon from '../components/image-icon';
import SocialButton from './social-button';
//  security
import {
  PUBLIC_ROUTE_PAGE_ABOUT,
  PUBLIC_ROUTE_PAGE_COOKIES,
  PUBLIC_ROUTE_PAGE_HOME,
  PUBLIC_ROUTE_PAGE_PRICING,
  PUBLIC_ROUTE_PAGE_PRIVACY,
  PUBLIC_ROUTE_PAGE_REFUNDS,
  PUBLIC_ROUTE_PAGE_RESOURCES,
  PUBLIC_ROUTE_PAGE_SHOP,
  PUBLIC_ROUTE_PAGE_SITEMAP,
  PUBLIC_ROUTE_PAGE_TERMS,
} from '../../security/constants/routes-public';

const LayoutFooter = () => {
  const siteMetadata = useSiteMetadata();
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      marginTop="4em"
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <Center>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>About</ListHeader>
              <GatsbyLink to={PUBLIC_ROUTE_PAGE_ABOUT}>
                The Author Guy
              </GatsbyLink>
              <GatsbyLink to={PUBLIC_ROUTE_PAGE_RESOURCES}>
                Resources
              </GatsbyLink>
              <GatsbyLink to={PUBLIC_ROUTE_PAGE_SHOP}>Shop</GatsbyLink>
              <GatsbyLink to={PUBLIC_ROUTE_PAGE_SITEMAP}>Sitemap</GatsbyLink>
            </Stack>

            <Stack align={'flex-start'}>
              <ListHeader>Find Me</ListHeader>
              <SimpleGrid columns={4} spacing={2}>
                {linksSocial.map((item, index) => {
                  const { icon: Icon } = item;

                  return (
                    <SocialButton
                      key={index}
                      alt={item.alt}
                      href={item.href}
                      label={item.label}
                      type={item.type}
                    >
                      {<Icon />}
                    </SocialButton>
                  );
                })}
              </SimpleGrid>
            </Stack>

            <Stack align={'flex-start'}>
              <ListHeader>Legal</ListHeader>
              <GatsbyLink to={PUBLIC_ROUTE_PAGE_COOKIES}>Cookies</GatsbyLink>
              <GatsbyLink to={PUBLIC_ROUTE_PAGE_PRIVACY}>Privacy</GatsbyLink>
              <GatsbyLink to={PUBLIC_ROUTE_PAGE_TERMS}>Terms</GatsbyLink>
            </Stack>

            <Stack align={'flex-start'}>
              <ListHeader>Tech In Use</ListHeader>
              <SimpleGrid columns={3} spacing={2}>
                {linksToResources.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    isExternal
                    marginBottom="0.4em"
                  >
                    <Image
                      alt={link.image.alt}
                      src={link.image.src[colorMode]}
                      sx={{ height: '1.2em' }}
                    />
                  </Link>
                ))}
              </SimpleGrid>
            </Stack>
          </SimpleGrid>
        </Center>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.400', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.400', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Link as={GatsbyLink} to={PUBLIC_ROUTE_PAGE_HOME}>
            <LogoIcon />
          </Link>
          <Link as={GatsbyLink} to={PUBLIC_ROUTE_PAGE_HOME}>
            <Text as="b" marginLeft="1em" marginTop="0" fontSize="lg">
              {siteMetadata.title}
            </Text>
          </Link>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          {`© ${new Date().getFullYear()} ${
            siteMetadata.title
          }. All rights reserved.`}
        </Text>
      </Box>
    </Box>
  );
};

export default LayoutFooter;
