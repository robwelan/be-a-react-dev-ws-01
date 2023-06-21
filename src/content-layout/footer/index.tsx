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
  Tag,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
//  constants
import linksSocial from '../../constants/social-links';
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
  PUBLIC_ROUTE_PAGE_TERMS,
} from '../../security/constants/routes-public';
//  icons
import iconGatsby from '../../images/gatsbyjs_icon.svg';
import iconJavascript from '../../images/javascript_icon.svg';
import iconNetlify from '../../images/netlify_icon.svg';
import iconNodeDark from '../../images/nodejs_icon_dark.svg';
import iconNodeLight from '../../images/nodejs_icon_light.svg';
import iconReact from '../../images/react_icon.svg';
import iconTypescript from '../../images/typescript_icon.svg';

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
            </Stack>

            <Stack align={'flex-start'}>
              <ListHeader>Find Me</ListHeader>
              <SimpleGrid columns={3} spacing={2}>
                {linksSocial.map((item, index) => {
                  const { icon: Icon } = item;

                  return (
                    <SocialButton
                      key={index}
                      alt={item.alt}
                      href={item.href}
                      label={item.label}
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
                <Link
                  href="https://www.gatsbyjs.com/"
                  isExternal
                  marginBottom="0.4em"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={colorMode === 'light' ? iconGatsby : iconGatsby}
                    sx={{ height: '1.2em' }}
                  />
                </Link>

                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  isExternal
                  marginBottom="0.4em"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={
                      colorMode === 'light' ? iconJavascript : iconJavascript
                    }
                    sx={{ height: '1.2em' }}
                  />
                </Link>

                <Link
                  isExternal
                  href="https://www.netlify.com/"
                  marginBottom="0.4em"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={colorMode === 'light' ? iconNetlify : iconNetlify}
                    sx={{ height: '1.2em' }}
                  />
                </Link>

                <Link
                  href="https://nodejs.org/"
                  isExternal
                  marginBottom="0.4em"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={colorMode === 'light' ? iconNodeLight : iconNodeDark}
                    sx={{ height: '1.2em' }}
                  />
                </Link>

                <Link
                  href="https://react.dev/"
                  isExternal
                  marginBottom="0.4em"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={colorMode === 'light' ? iconReact : iconReact}
                    sx={{ height: '1.2em' }}
                  />
                </Link>

                <Link
                  href="https://www.typescriptlang.org/"
                  isExternal
                  marginBottom="0.4em"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={
                      colorMode === 'light' ? iconTypescript : iconTypescript
                    }
                    sx={{ height: '1.2em' }}
                  />
                </Link>
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
