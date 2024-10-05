import React from 'react';
//  chakra ui
import {
  Box,
  Drawer,
  DrawerBody,
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
//  recoil
import { useRecoilState } from 'recoil';
//  gatsby
import { Link as GatsbyLink } from 'gatsby';
//  images
import LogoImage from '../components/image-logo';
//  local components
import SiteTitleForNav from '../components/site-title-for-nav';
//  recoil state
import { siteConfiguration } from '../../state';
//  routes
import { PUBLIC_ROUTE_PAGE_HOME } from '../../security/constants/routes-public';
//  siblings
import NavItem from './nav-item';
//  configurations
import linkItemsAffiliateCourses from '../../constants/page-links/link-items-affiliate-courses';
import linkItemsApps from '../../constants/page-links/link-items-apps';
import linkItemsGames from '../../constants/page-links/link-items-games';
import linkItemsPages from '../../constants/page-links/link-items-pages';

type Props = {
  isOpen: boolean;
  onClose: Function;
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
              {linkItemsAffiliateCourses &&
                linkItemsAffiliateCourses.length > 0 && (
                  <Box>
                    <>
                      <Heading size="sm" sx={{ marginBottom: '0.5em' }}>
                        Courses
                      </Heading>

                      {linkItemsAffiliateCourses.map((link) => (
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
            <Box height="4em"></Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
