import React from 'react';
//  chakra ui
import { Text } from '@chakra-ui/react';
//  types
import { Children } from '../../constants/types';

type Props = {
  children: Children;
};

const ListHeader = (props: Props) => {
  const { children } = props;

  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      <>{children}</>
    </Text>
  );
};

export default ListHeader;
