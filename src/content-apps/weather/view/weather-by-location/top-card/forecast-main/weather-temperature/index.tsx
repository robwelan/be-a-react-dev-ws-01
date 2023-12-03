import React from 'react';
//  chakra-ui
import { Box, Flex, HStack, Link, Text, VStack } from '@chakra-ui/react';
//  constants
import { expandedWeatherCode } from '../../../../../constants/weather-code';
//  local helpers
import getAsset from './get-asset';

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
};

const WeatherTemperature = (props: Props) => {
  const { code = 0, temperature = {}, temperatureApparent = {}, size } = props;
  const { now: temperatureNow } = temperature;
  const { now: temperatureApparentNow } = temperatureApparent;
  const { sizeTemperature = '1em', sizeUnits = '1em' } = size;
  const asset = getAsset({ icons: expandedWeatherCode, code });

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
              <Text fontSize={sizeUnits} lineHeight={1}>
                <Link>°C</Link>
              </Text>
              <Text>|</Text>
              <Text fontSize={sizeUnits} lineHeight={1}>
                <Link>°F</Link>
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
