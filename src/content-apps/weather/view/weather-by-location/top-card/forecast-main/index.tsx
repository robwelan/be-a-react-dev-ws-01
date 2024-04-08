import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import WeatherIcon from './weather-icon';
import WeatherTemperature from './weather-temperature';
//  state
import { weatherLocationTopCard } from '../../../../state/atoms';

type WeatherUnits = {
  temperature: {
    now: number;
  };
  temperatureApparent: {
    now: number;
  };
};

type Props = {
  isMobile: boolean;
};

const MainForecast = (props: Props) => {
  const { isMobile } = props;
  const state = useRecoilValue(weatherLocationTopCard);
  const { units, weather } = state;
  const { code, daylight } = weather;
  const weatherUnits = weather[units as keyof typeof weather];
  const { temperature, temperatureApparent } = weatherUnits as WeatherUnits;

  if (isMobile) {
    return (
      <Flex alignContent="flex-start" justifyContent="center" gap={0}>
        <Box
          flex="1"
          sx={{
            position: 'relative',
          }}
        >
          <WeatherIcon code={code} day={daylight} size="500%" />
        </Box>
        <Box
          flex="1"
          sx={{
            position: 'relative',
          }}
        >
          <WeatherTemperature
            code={code}
            temperature={temperature}
            temperatureApparent={temperatureApparent}
            size={{ sizeTemperature: '400%', sizeUnits: '125%' }}
            units={units}
          />
        </Box>
      </Flex>
    );
  }

  return (
    <Flex alignContent="flex-start" justifyContent="center" gap={0}>
      <Box flex="1" sx={{ position: 'relative', right: '1em' }}>
        <WeatherIcon code={code} day={daylight} size="800%" />
      </Box>
      <Box flex="1" sx={{ position: 'relative', left: '-1em' }}>
        <WeatherTemperature
          code={code}
          temperature={temperature}
          temperatureApparent={temperatureApparent}
          size={{ sizeTemperature: '500%', sizeUnits: '150%' }}
          units={units}
        />
      </Box>
    </Flex>
  );
};

export default MainForecast;
