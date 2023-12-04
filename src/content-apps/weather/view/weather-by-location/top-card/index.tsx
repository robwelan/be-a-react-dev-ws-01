import React from 'react';
//  chakra-ui
import { Box, Card, CardBody, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
//  hooks
import useDeviceSize from '../../../../../hooks/use-device-size';
//  local components
import MainForecast from './forecast-main';
import Place from './place';
import Summary from './summary';

//  local components
const WeatherByLocation = () => {
  const device = useDeviceSize();
  const { type } = device;
  const { isMobile } = type;

  return (
    <Card sx={{ background: 'rgba(0, 0, 0, 0.025)' }}>
      <CardBody>
        {isMobile && (
          <SimpleGrid columns={1}>
            <Place />
            <Box height="1em" />
            <MainForecast />
            <Summary />
          </SimpleGrid>
        )}
        {!isMobile && (
          <SimpleGrid columns={3}>
            <Place />
            <MainForecast />
            <Summary />
          </SimpleGrid>
        )}
        <Text textAlign={isMobile ? 'center' : 'right'} fontSize="xs">
          Location:{' '}
          <Link href="http://osm.org/copyright" isExternal>
            &copy; OpenStreetMap contributors, ODbL 1.0.
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
        <Text textAlign={isMobile ? 'center' : 'right'} fontSize="xs">
          Weather: &copy;{' '}
          <Link href="https://www.tomorrow.io/weather-api" isExternal>
            Powered by Tomorrow.io
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
      </CardBody>
    </Card>
  );
};

export default WeatherByLocation;
