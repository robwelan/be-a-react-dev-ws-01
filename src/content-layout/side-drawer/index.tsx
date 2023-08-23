import PropType from 'prop-types';
import React from 'react';
//  chakra ui
import {
  Box,
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  HStack,
  Link,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
//  gatsby
import { Link as GatsbyLink } from 'gatsby';
//  images
import LogoImage from '../components/image-logo';
//  local components
import SiteTitleForNav from '../components/site-title-for-nav';
//  routes
import { PUBLIC_ROUTE_PAGE_HOME } from '../../security/constants/routes-public';
//  siblings
import NavItem from './nav-item';
//  configurations
import linkItemsApps from './link-items-apps';
import linkItemsGames from './link-items-games';
import linkItemsPages from './link-items-pages';

type Props = {
  isOpen: boolean;
  onClose: Function;
  onOpen: Function;
};

const SideDrawer = (props: Props) => {
  const { isOpen, onClose } = props;

  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={() => onClose()}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader borderBottomWidth="1px">
            <Link
              as={GatsbyLink}
              to={PUBLIC_ROUTE_PAGE_HOME}
              onClick={() => onClose()}
            >
              <HStack>
                <Box>
                  <LogoImage />
                </Box>
                <Box>
                  <SiteTitleForNav />
                </Box>
              </HStack>
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              {linkItemsApps && linkItemsApps.length > 0 && (
                <Box>
                  <>
                    <Heading size="sm" sx={{ marginBottom: '0.5em' }}>
                      Apps
                    </Heading>
                    {linkItemsApps.map((link) => (
                      <NavItem
                        icon={link.icon}
                        key={link.name}
                        onClose={onClose}
                        route={link.route}
                      >
                        {link.name}
                      </NavItem>
                    ))}
                  </>
                </Box>
              )}
              {linkItemsPages && linkItemsPages.length > 0 && (
                <Box>
                  <>
                    <Heading size="sm" sx={{ marginBottom: '0.5em' }}>
                      General
                    </Heading>
                    {linkItemsPages.map((link) => (
                      <NavItem
                        icon={link.icon}
                        key={link.name}
                        onClose={onClose}
                        route={link.route}
                      >
                        {link.name}
                      </NavItem>
                    ))}
                  </>
                </Box>
              )}
              {linkItemsGames && linkItemsGames.length > 0 && (
                <Box>
                  <>
                    <Heading size="sm" sx={{ marginBottom: '0.5em' }}>
                      Games
                    </Heading>
                    {linkItemsGames.map((link) => (
                      <NavItem
                        icon={link.icon}
                        key={link.name}
                        onClose={onClose}
                        route={link.route}
                      >
                        {link.name}
                      </NavItem>
                    ))}
                  </>
                </Box>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

SideDrawer.propTypes = {
  isOpen: PropType.bool.isRequired,
  onClose: PropType.func.isRequired,
};

export default SideDrawer;
