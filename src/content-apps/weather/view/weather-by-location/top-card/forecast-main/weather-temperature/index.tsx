import React from 'react';
//  recoil
import { useSetRecoilState } from 'recoil';
//  chakra-ui
import { Box, Flex, HStack, Link, Text, VStack } from '@chakra-ui/react';
//  constants
import {
  UNITS_OF_MEASUREMENT_IMPERIAL,
  UNITS_OF_MEASUREMENT_METRIC,
} from '../../../../../constants';
import { expandedWeatherCode } from '../../../../../constants/weather-code';
//  local helpers
import getAsset from './get-asset';
import setImperial from './set-imperial';
import setMetric from './set-metric';
//  state
import { weatherLocationTopCard } from '../../../../../state/atoms';

type Props = {
  code: number;
  temperature: {
    now: number;
  };
  temperatureApparent: {
    now: number;
  };
  size: {
    sizeTemperature: string;
    sizeUnits: string;
  };
  units: string;
};

const WeatherTemperature = (props: Props) => {
  const {
    code = 0,
    temperature = {},
    temperatureApparent = {},
    size,
    units,
  } = props;
  const setStateTopCard = useSetRecoilState(weatherLocationTopCard);
  const { now: temperatureNow } = temperature;
  const { now: temperatureApparentNow } = temperatureApparent;
  const { sizeTemperature = '1em', sizeUnits = '1em' } = size;
  const asset = getAsset({ icons: expandedWeatherCode, code });
  const isImperial = units === UNITS_OF_MEASUREMENT_IMPERIAL;
  const isMetric = units === UNITS_OF_MEASUREMENT_METRIC;
  const degreesCelsius = '°C';
  const degreesFahrenheit = '°F';

  return (
    <VStack align="left">
      <Box>
        <Flex>
          <Box>
            <Text
              fontSize={sizeTemperature}
              lineHeight={1}
              sx={{ position: 'relative', left: '-3px', marginTop: '-4.6%' }}
            >
              {temperatureNow}
            </Text>
          </Box>
          <Box flex="1">
            <HStack
              sx={{ position: 'relative', left: '-5px', marginTop: '0px' }}
            >
              <Text
                color={isImperial ? 'gray.500' : ''}
                fontSize={sizeUnits}
                lineHeight={1}
              >
                {isImperial && (
                  <Link
                    onClick={() => setMetric({ setState: setStateTopCard })}
                  >
                    {degreesCelsius}
                  </Link>
                )}
                {isMetric && degreesCelsius}
              </Text>
              <Text color="orange.500">|</Text>
              <Text
                color={isMetric ? 'gray.500' : ''}
                fontSize={sizeUnits}
                lineHeight={1}
              >
                {isImperial && degreesFahrenheit}
                {isMetric && (
                  <Link
                    onClick={() => setImperial({ setState: setStateTopCard })}
                  >
                    {degreesFahrenheit}
                  </Link>
                )}
              </Text>
            </HStack>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Text sx={{ position: 'relative', top: '-1em' }}>{asset.label}</Text>
        {temperatureApparentNow !== temperatureNow && (
          <Text fontSize="80%" sx={{ position: 'relative', top: '-1.8em' }}>
            Feels like: {temperatureApparentNow}
          </Text>
        )}
      </Box>
    </VStack>
  );
};

export default WeatherTemperature;
