import React from 'react';
//  chakra ui
import { Box, Link, Icon } from '@chakra-ui/react';
//  gatsby
import { Link as GatsbyLink } from 'gatsby';
//  types
import { Children } from '../../constants/types';

type Props = {
  children: Children;
  icon: any;
  onClose: any;
  route: string;
};

const NavItem = (props: Props) => {
  const { icon, children, onClose, route } = props;

  return (
    <Link
      as={GatsbyLink}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      onClick={onClose}
      to={route}
    >
      <Box
        display="flex"
        alignItems="center"
        p="4"
        // mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'gray.400',
          color: 'white',
        }}
      >
        {icon && (
          <Icon
            as={icon}
            boxSize={4}
            fontSize="12"
            mr="4"
            _groupHover={{
              color: 'white',
            }}
          />
        )}
        {children}
      </Box>
    </Link>
  );
};

export default NavItem;
