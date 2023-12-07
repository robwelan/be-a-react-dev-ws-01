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
import { TbUvIndex } from 'react-icons/tb';
//  helpers
import getTemperatureTooltip from './get-temperature-tooltip';
import getBeaufortWindScaleIcon from '../../../../helpers/get-beaufort-wind-scale';
import getWeatherTime from '../../../../helpers/get-weather-time';
//  state
import { weatherLocationTopCard } from '../../../../state/atoms';

type WeatherUnits = {
  temperature: {
    avg: number;
    max: number;
    min: number;
  };
  windSpeed: {
    unit: string;
    value: number;
  };
};

const WeatherSummary = () => {
  const state = useRecoilValue(weatherLocationTopCard);
  const { units, weather } = state;

  const {
    humidity,
    moonriseTime,
    moonsetTime,
    sunriseTime,
    sunsetTime,
    uv,
    windDirection,
  } = weather;
  const weatherUnits = weather[units as keyof typeof weather];
  const { temperature, windSpeed } = weatherUnits as WeatherUnits;
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
      {/* Humidity */}
      <Tooltip label="Humidity">
        <HStack spacing={0}>
          <Box sx={{ ...sxVerticalCenter }}>
            <Icon as={WiHumidity} w={8} h={8} color="blue.500" />
          </Box>
          <Box sx={{ ...sxVerticalCenter }}> {humidity}%</Box>
        </HStack>
      </Tooltip>
      <HStack spacing={0}>
        {/* Wind */}
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
      {/* Temperature */}
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
      {/* UV */}
      <Tooltip label={`UV min: ${uv.min}, index: ${uv.index}, max: ${uv.max}`}>
        <HStack spacing={0}>
          <Box sx={{ ...sxVerticalCenter }}>
            <Icon as={TbUvIndex} w={8} h={8} color="purple.500" />
          </Box>
          <Box sx={{ ...sxVerticalCenter }}>min: {uv.min}</Box>
          <Box sx={{ ...sxVerticalCenter }}>&nbsp;index: {uv.index}&nbsp;</Box>
          <Box sx={{ ...sxVerticalCenter }}>max: {uv.max}</Box>
        </HStack>
      </Tooltip>
      {/* Sun */}
      <Tooltip
        label={`Sunrise: ${formatSunriseTime} Sunset: ${formatSunsetTime}`}
      >
        <HStack spacing={0}>
          <Box sx={{ ...sxVerticalCenter }}>
            <Icon as={WiSunrise} w={8} h={8} color="orange.500" />
          </Box>
          <Box sx={{ ...sxVerticalCenter }}>{formatSunriseTime}</Box>
          <Box sx={{ ...sxVerticalCenter }}>
            <Icon as={WiSunset} w={8} h={8} color="orange.500" />
          </Box>
          <Box sx={{ ...sxVerticalCenter }}>{formatSunsetTime}</Box>
        </HStack>
      </Tooltip>
      {/* Moon */}
      <Tooltip
        label={`Moonrise: ${formatMoonriseTime} Moonset: ${formatMoonsetTime}`}
      >
        <HStack spacing={0}>
          <Box sx={{ ...sxVerticalCenter }}>
            <Icon as={WiMoonrise} w={8} h={8} color="gray.500" />
          </Box>
          <Box sx={{ ...sxVerticalCenter }}>{formatMoonriseTime}</Box>
          <Box sx={{ ...sxVerticalCenter }}>
            <Icon as={WiMoonset} w={8} h={8} color="gray.500" />
          </Box>
          <Box sx={{ ...sxVerticalCenter }}>{formatMoonsetTime}</Box>
        </HStack>
      </Tooltip>
    </VStack>
  );
};

export default WeatherSummary;
