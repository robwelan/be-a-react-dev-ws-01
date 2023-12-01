import React, { useEffect, useState } from 'react';
import { Box, HStack } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  helpers
import getDaylight from '../../../helpers/get-daylight';
//  local components
import WeatherIcon from './weather-icon';
import WeatherTemperature from './weather-temperature';
//  state
import { weatherLocationForecast } from '../../../state/atoms';

const MainForecast = () => {
  const defaultState = { daily: {}, minutely: {} };
  const [state, setState] = useState(defaultState);
  const { daily: stateDaily = {}, minutely: stateMinutely = {} } = state;
  const { time: timeDaily = '', values: valuesDaily = {} } = stateDaily;
  const { values: valuesMinutely = {} } = stateMinutely;
  const { sunriseTime: sunriseDaily = '', sunsetTime: sunsetDaily = '' } =
    valuesDaily;
  const {
    temperature: temperatureMinutely = 0,
    weatherCode: weatherCodeMinutely = 0,
  } = valuesMinutely;
  const forecast = useRecoilValue(weatherLocationForecast);
  const { data = {} } = forecast;
  const { timelines = {} } = data;
  const { daily = [], minutely = [] } = timelines;
  const daylight = getDaylight({
    current: timeDaily,
    sunrise: sunriseDaily,
    sunset: sunsetDaily,
  });

  //  minutely effect
  useEffect(() => {
    if (daily) {
      const [firstItem] = daily;

      setState((prevState) => ({
        ...prevState,
        daily: firstItem,
      }));
    }
  }, [daily]);

  //  mounted effect
  useEffect(() => {
    return () => {
      setState(defaultState);
    };
  }, []);

  //  minutely effect
  useEffect(() => {
    if (minutely) {
      const lastItem = [...minutely].pop();

      setState((prevState) => ({
        ...prevState,
        minutely: lastItem,
      }));
    }
  }, [minutely]);

  return (
    <HStack>
      <Box>
        <WeatherIcon code={weatherCodeMinutely} day={daylight} size="400%" />
      </Box>
      <Box>
        <WeatherTemperature
          temperature={temperatureMinutely}
          size={{ sizeTemperature: '800%', sizeUnits: '200%' }}
        />
      </Box>
    </HStack>
  );
};

export default MainForecast;
