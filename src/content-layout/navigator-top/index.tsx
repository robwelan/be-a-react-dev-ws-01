import React from 'react';
//  chakra-ui
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Spacer,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
//  gatsby
import { Link as GatsbyLink } from 'gatsby';
//  recoil
import { useRecoilState } from 'recoil';
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
//  local components
import LogoImage from '../components/image-logo';
import LogoIcon from '../components/image-icon';
import SiteTitleForNav from '../components/site-title-for-nav';
//  routes
import { PUBLIC_ROUTE_PAGE_HOME } from '../../security/constants/routes-public';
//  siblings
// import UserMenu from './user-menu';
//  state
import { fontSizeState } from '../../state';
//  types
import { LayoutConfiguration } from '../../constants/types';

const INCREMENT_FONT_SIZE = 0.05;

type Props = {
  configuration: LayoutConfiguration;
};

const NavigatorTop = (props: Props) => {
  const { configuration } = props;
  const { color, device, disclosure } = configuration;
  const { colorMode, toggleColorMode } = color;
  const { onOpen } = disclosure;
  const [, setFontSize] = useRecoilState(fontSizeState);

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
                <ButtonGroup isAttached variant="outline" size="sm">
                  <Button
                    onClick={() => setFontSize((size) => size - INCREMENT_FONT_SIZE)}
                  >
                    A-
                  </Button>
                  <Button onClick={() => setFontSize(1)}>A</Button>
                  <Button
                    onClick={() => setFontSize((size) => size + INCREMENT_FONT_SIZE)}
                  >
                    A+
                  </Button>
                </ButtonGroup>
              </Box>
              <Box height="1em" width="1em" />
              <Box>
                <IconButton
                  aria-label="Open menu"
                  colorScheme="black"
                  icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  onClick={toggleColorMode}
                  size="sm"
                  variant="outline"
                />
              </Box>
              {/* <Box height="1em" width="2em" /> */}
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
