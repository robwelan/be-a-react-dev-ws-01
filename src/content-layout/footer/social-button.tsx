import React from 'react';
//  chakra-ui
import { chakra, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
//  types
import { Children } from '../../constants/types';

type Props = {
  alt: string;
  children: Children;
  href: string;
  label: string;
};

const SocialButton = (props: Props) => {
  const { alt, children, href, label } = props;

  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      rel="noopener noreferrer"
      target="_blank"
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.400', 'whiteAlpha.400'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <>{children}</>
    </chakra.button>
  );
};

export default SocialButton;
