import React from 'react';
//  hooks
import useWeatherForecastQuery from '../hooks/use-weather-forecast-query-by-coords';
//  types
import { Coordinates } from '../types';

interface Props extends Coordinates {
  dev?: boolean;
}

const UtilizeCoordinatesForecast = (props: Props) => {
  const { latitude, longitude } = props;

  useWeatherForecastQuery({ latitude, longitude });

  return <></>;
};

export default UtilizeCoordinatesForecast;
