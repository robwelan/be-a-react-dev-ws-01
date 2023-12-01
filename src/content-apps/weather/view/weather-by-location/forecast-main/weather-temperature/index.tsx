import React from 'react';
//  chakra-ui
import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react';
//  utilities
import getRounded from '../../../../../../utilities/numbers/get-number-rounded-to-decimal-place';

type Props = {
  temperature: number;
  size: {
    sizeTemperature: string;
    sizeUnits: string;
  };
};

const WeatherTemperature = (props: Props) => {
  const { temperature = 0, size = {} } = props;
  const { sizeTemperature = '1em', sizeUnits = '1em' } = size;

  return (
    <Flex>
      <Box>
        <Text
          fontSize={sizeTemperature}
          lineHeight={1}
          sx={{ marginTop: '-4.6%' }}
        >
          {getRounded({ value: temperature, places: 1 })}°
        </Text>
      </Box>
      <Box flex="1">
        <HStack sx={{ marginTop: '0px' }}>
          <Text
            fontSize={sizeUnits}
            lineHeight={1}
          >
            <Link>C</Link>
          </Text>
          <Text>|</Text>
          <Text
            fontSize={sizeUnits}
            lineHeight={1}
          >
            <Link>F</Link>
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
};

export default WeatherTemperature;
