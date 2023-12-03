import React from 'react';
//  chakra-ui
import { Box, Flex, HStack, Link, Text, VStack } from '@chakra-ui/react';
//  constants
import { expandedWeatherCode } from '../../../../../constants/weather-code';
//  local helpers
import getAsset from './get-asset';
//  utilities
import getRounded from '../../../../../../../utilities/numbers/get-number-rounded-to-decimal-place';

type Props = {
  code: number;
  temperature: number;
  size: {
    sizeTemperature: string;
    sizeUnits: string;
  };
};

const WeatherTemperature = (props: Props) => {
  const { code = 0, temperature = 0, size } = props;
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
              {getRounded({ value: temperature, places: 1 })}
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
      </Box>
    </VStack>
  );
};

export default WeatherTemperature;
