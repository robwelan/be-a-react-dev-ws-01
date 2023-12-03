import React from 'react';
//  chakra-ui
import { Text } from '@chakra-ui/react';
//  hooks
import useGetTime from '../../../../hooks/use-get-time';

const PresentTime = () => {
  const [time] = useGetTime();

  return <Text fontSize="70%">{time}</Text>;
};

export default PresentTime;
