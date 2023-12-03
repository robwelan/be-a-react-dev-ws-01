import React from 'react';
import {
  Card,
  CardBody,
  SimpleGrid,
} from '@chakra-ui/react';
//  local components
import MainForecast from './forecast-main';
import Place from './place';
import Summary from './summary';

const WeatherByLocation = () => {

  return (
    <Card sx={{ background: 'rgba(0, 0, 0, 0.025)' }}>
      <CardBody>
        <SimpleGrid columns={3}>
          <Place />
          <MainForecast />
          <Summary />
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};

export default WeatherByLocation;
