import React from 'react';
//  recoil
import { useRecoilValue } from 'recoil';
//  chakra-ui
import { Box, HStack, Icon, Tooltip, VStack } from '@chakra-ui/react';
//  react-icons
import {
  WiHumidity,
  WiMoonrise,
  WiMoonset,
  WiSunrise,
  WiSunset,
  WiThermometer,
  WiThermometerExterior,
  WiWindDeg,
} from 'react-icons/wi';
//  helpers
import getTemperatureTooltip from './get-temperature-tooltip';
import getBeaufortWindScaleIcon from '../../../../helpers/get-beaufort-wind-scale';
import getWeatherTime from '../../../../helpers/get-weather-time';
//  state
import { weatherLocationTopCard } from '../../../../state/atoms';

const WeatherSummary = () => {
  const state = useRecoilValue(weatherLocationTopCard);
  const { units, weather } = state;

  const {
    humidity,
    moonriseTime,
    moonsetTime,
    sunriseTime,
    sunsetTime,
    windDirection,
  } = weather;
  const weatherUnits = weather[units as keyof typeof weather];
  const { temperature, windSpeed } = weatherUnits;
  const beaufort = getBeaufortWindScaleIcon({ speed: windSpeed });
  const sxVerticalCenter = {
    display: 'flex',
    alignItems: 'center',
  };
  const formatMoonriseTime = getWeatherTime({
    time: moonriseTime,
    format: 'hh:mm a',
  });
  const formatMoonsetTime = getWeatherTime({
    time: moonsetTime,
    format: 'hh:mm a',
  });
  const formatSunriseTime = getWeatherTime({
    time: sunriseTime,
    format: 'hh:mm a',
  });
  const formatSunsetTime = getWeatherTime({
    time: sunsetTime,
    format: 'hh:mm a',
  });

  return (
    <VStack spacing={0} alignItems="flex-end">
      <Tooltip label="Humidity">
        <HStack spacing={0}>
          <Box sx={{ ...sxVerticalCenter }}>
            <Icon as={WiHumidity} w={8} h={8} color="blue.500" />
          </Box>
          <Box sx={{ ...sxVerticalCenter }}> {humidity}%</Box>
        </HStack>
      </Tooltip>
      <HStack spacing={0}>
        <HStack>
          <Tooltip label={beaufort.specifications}>
            <HStack>
              <Box sx={{ ...sxVerticalCenter }}>{beaufort.description} </Box>
              <Box sx={{ ...sxVerticalCenter }}>
                <Icon as={beaufort.icon} w={8} h={8} color="blue.500" />
              </Box>
            </HStack>
          </Tooltip>
          <Tooltip label="Wind Speed">
            <Box sx={{ ...sxVerticalCenter }}>
              {windSpeed.value} {windSpeed.unit}
            </Box>
          </Tooltip>
        </HStack>
        <Tooltip label={`Wind direction: ${windDirection}°`}>
          <Box sx={{ ...sxVerticalCenter }}>
            <Icon
              as={WiWindDeg}
              w={8}
              h={8}
              color="blue.500"
              sx={{ transform: `rotate(${windDirection}deg)` }}
            />
          </Box>
        </Tooltip>
      </HStack>
      <Tooltip label={getTemperatureTooltip({ units, temperature })}>
        <HStack spacing={0}>
          <Box sx={{ ...sxVerticalCenter }}>
            <Icon as={WiThermometerExterior} w={8} h={8} color="blue.500" />
          </Box>
          <Box sx={{ ...sxVerticalCenter }}> {temperature.min}°</Box>
          <Box sx={{ ...sxVerticalCenter }}>
            <Icon as={WiThermometer} w={8} h={8} color="red.500" />
          </Box>
          <Box sx={{ ...sxVerticalCenter }}> {temperature.max}°</Box>
        </HStack>
      </Tooltip>
      <Tooltip
        label={`Sunrise: ${formatSunriseTime} Sunset: ${formatSunsetTime}`}
      >
        <HStack>
          <Box>
            <Icon as={WiSunrise} w={8} h={8} color="orange.500" />
          </Box>
          <Box>{formatSunriseTime}</Box>
          <Box>
            <Icon as={WiSunset} w={8} h={8} color="orange.500" />
          </Box>
          <Box>{formatSunsetTime}</Box>
        </HStack>
      </Tooltip>{' '}
      <Tooltip
        label={`Moonrise: ${formatMoonriseTime} Moonset: ${formatMoonsetTime}`}
      >
        <HStack>
          <Box>
            <Icon as={WiMoonrise} w={8} h={8} color="gray.500" />
          </Box>
          <Box>{formatMoonriseTime}</Box>
          <Box>
            <Icon as={WiMoonset} w={8} h={8} color="gray.500" />
          </Box>
          <Box>{formatMoonsetTime}</Box>
        </HStack>
      </Tooltip>
    </VStack>
  );
};

export default WeatherSummary;
