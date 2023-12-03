import React from 'react';
//  chakra-ui
import { Box, Heading, HStack, Text } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import PresentTime from './present-time';
//  state
import { weatherLocationTopCard } from '../../../../state/atoms';

type State = {
  location: {
    countryCode: string;
    date: string;
    place: string;
  };
};

const Place = () => {
  const state = useRecoilValue(weatherLocationTopCard);
  const { location } = state as State;
  const { countryCode, date, place } = location;

  return (
    <Box>
      <HStack spacing={0}>
        <Box>
          <Heading as="h2" fontSize="130%" sx={{ margin: 0, padding: 0 }}>
            {place}
          </Heading>
        </Box>
        <Box sx={{ position: 'relative', bottom: '-2px' }}>
          <Text fontSize="80%" sx={{ margin: 0, padding: 0 }}>
            , {countryCode}
          </Text>
        </Box>
      </HStack>

      <Text fontSize="90%">{date}</Text>
      <PresentTime />
    </Box>
  );
};

export default Place;
