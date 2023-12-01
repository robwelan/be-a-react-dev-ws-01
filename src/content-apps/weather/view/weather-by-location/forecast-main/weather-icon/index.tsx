import React from 'react';
//  chakra-ui
import { Icon } from '@chakra-ui/react';
//  constants
import { expandedWeatherCode } from '../../../../constants/weather-code';

type Props = {
  code: number;
  day: boolean;
  size: string;
};

const WeatherIcon = (props: Props) => {
  const { code, day, size = '1em' } = props;

  if (day) {
    return (
      <Icon
        as={expandedWeatherCode[code as keyof typeof expandedWeatherCode].day}
        fontSize={size}
      />
    );
  }
  if (!day) {
    return (
      <Icon
        as={expandedWeatherCode[code as keyof typeof expandedWeatherCode].night}
        fontSize={size}
      />
    );
  }

  return <></>;
};

export default WeatherIcon;
