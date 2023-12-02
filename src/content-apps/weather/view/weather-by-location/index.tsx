import React from 'react';
import {
  Box,
  Button,
  Card,
  CardFooter,
  Image,
  Stack,
  CardBody,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  state
import {
  weatherLocationForecast,
  weatherLocationLocale,
} from '../../state/atoms';
//  local components
import MainForecast from './forecast-main';
import Place from './place';

const WeatherByLocation = () => {
  const forecast = useRecoilValue(weatherLocationForecast);
  const locale = useRecoilValue(weatherLocationLocale);

  if (locale.loading) {
    return null;
  }

  return (
    <Card sx={{ background: 'rgba(0, 0, 0, 0.025)' }}>
      <CardBody>
        <SimpleGrid columns={3}>
          <Place />
          <MainForecast />
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};

export default WeatherByLocation;
