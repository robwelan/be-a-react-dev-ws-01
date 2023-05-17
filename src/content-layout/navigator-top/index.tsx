import React from 'react';
//  chakra-ui
import {
  Box,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Spacer,
} from '@chakra-ui/react';
//  gatsby
import { Link as GatsbyLink } from 'gatsby';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
//  local components
import LogoImage from '../components/image-logo';
import LogoIcon from '../components/image-icon';
import SiteTitleForNav from '../components/site-title-for-nav';
//  routes
import { PUBLIC_ROUTE_PAGE_HOME } from '../../security/constants/routes-public';
//  siblings
// import UserMenu from './user-menu';
//  types
import { LayoutConfiguration } from '../../constants/types';

type Props = {
  configuration: LayoutConfiguration;
};

const NavigatorTop = (props: Props) => {
  const { configuration } = props;
  const { color, device, disclosure } = configuration;
  const { colorMode, toggleColorMode } = color;
  const { onOpen } = disclosure;

  return (
    <>
      <Box px={4} w="100%" sx={{ borderBottom: '1px solid gray' }}>
        <SimpleGrid columns={2} spacing={4}>
          <Box p={4}>
            <HStack>
              <Box>
                <IconButton
                  variant="outline"
                  colorScheme="black"
                  aria-label="Open menu"
                  icon={<FiMenu />}
                  onClick={onOpen}
                />
              </Box>
              <Box>
                <Link
                  aria-label="home"
                  as={GatsbyLink}
                  to={PUBLIC_ROUTE_PAGE_HOME}
                >
                  {device.screen.isExtraSmall && <LogoIcon />}
                  {!device.screen.isExtraSmall && (
                    <>
                      <HStack>
                        <Box>
                          <LogoImage />
                        </Box>
                        <Box>
                          <SiteTitleForNav />
                        </Box>
                      </HStack>
                    </>
                  )}
                </Link>
              </Box>
            </HStack>
          </Box>
          <Box p={4}>
            <HStack>
              <Spacer />
              <Box>
                <IconButton
                  variant="outline"
                  colorScheme="black"
                  aria-label="Open menu"
                  icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  onClick={toggleColorMode}
                />
              </Box>
              {/* <Box>
                {/* USER MENU */}
              {/* <UserMenu /> */}
              {/* </Box> */}
            </HStack>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default NavigatorTop;
