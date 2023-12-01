import React from 'react';
//  chakra-ui
import { Box, Heading, HStack, Text } from '@chakra-ui/react';
//  date-fns
import { format } from 'date-fns';
//  recoil
import { useRecoilValue } from 'recoil';
//  hooks
import useGetTime from '../../../hooks/use-get-time';
//  state
import { weatherLocationLocale } from '../../../state/atoms';

const Place = () => {
  const locale = useRecoilValue(weatherLocationLocale);
  const { data = {} } = locale;
  const { address = {}, name = '' } = data;
  const { country_code = '' } = address;
  const datePresentation = format(new Date(), 'cccc, d MMMM yyyy');
  const [time] = useGetTime();

  return (
    <Box>
      <HStack spacing={0}>
        <Box>
          <Heading as="h2" fontSize="130%" sx={{ margin: 0, padding: 0 }}>
            {name}
          </Heading>
        </Box>
        <Box sx={{ position: 'relative', bottom: '-2px' }}>
          <Text fontSize="80%" sx={{ margin: 0, padding: 0 }}>
            , {country_code.toUpperCase()}
          </Text>
        </Box>
      </HStack>

      <Text fontSize="90%">{datePresentation}</Text>
      <Text fontSize="70%">{time}</Text>
    </Box>
  );
};

export default Place;
