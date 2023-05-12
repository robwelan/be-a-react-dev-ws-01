import React from 'react';
//  chakra-ui
import {
  Avatar,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Spinner,
} from '@chakra-ui/react';
//  gatsby
import { navigate } from 'gatsby';
//  jotai
import { useAtomValue } from 'jotai';
//  constants
import { PUBLIC_ROUTE_PAGE_HOME } from '../../security/constants/routes-public';
//  global state
import atomCurrentUser from '../../global-state/atom-current-user';
import atomUserSettings from '../../global-state/atom-user-settings';
//  lib
import signOut from '../../lib/auth/sign-out';
//  utilities
import getIsObjectValid from '../../utilities/objects/get-is-object-valid';

const getUserName = (payload) => {
  const { name = {} } = payload;
  const { first = '', last = '' } = name;

  if (first !== '' || last !== '') {
    return `${first}${first !== '' && last !== '' ? ' ' : ''}${last}`;
  }

  return 'User Name';
};

const UserMenu = () => {
  const currentUser = useAtomValue(atomCurrentUser);
  const userSettings = useAtomValue(atomUserSettings);
  const { user = {} } = currentUser;
  const userIsValid = getIsObjectValid({ object: user });
  const { data = {} } = userSettings;
  const { profile = {} } = data;
  const { name = {} } = profile;

  const doSignOut = async () => {
    const resultSignOut = await signOut();

    if (resultSignOut && resultSignOut.success) {
      navigate(PUBLIC_ROUTE_PAGE_HOME);
    }

    return null;
  };

  if (currentUser && currentUser.error) return null;
  if (!userIsValid) return null;
  if (userIsValid && user.isAnonymous) return null;
  if (userIsValid && !user.emailVerified) return null;

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}
      >
        {!currentUser && <Spinner size="lg" />}
        {currentUser && !currentUser.completed && <Spinner size="lg" />}
        {currentUser && currentUser.completed && <Avatar size="sm" />}
      </MenuButton>
      <MenuList alignItems={'center'}>
        <br />
        <Center>
          <Avatar size={'2xl'} />
        </Center>
        <br />
        <Center>
          <p>{getUserName({ name })}</p>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem>Your Servers</MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem onClick={() => doSignOut()}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
