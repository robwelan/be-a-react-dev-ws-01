import React from 'react';
//  chakra-ui
import { Icon, useColorModeValue } from '@chakra-ui/react';
//  constants
import {
  TIME_OF_DAY_IS_DAY_TIME,
  TIME_OF_DAY_IS_NIGHT_TIME,
} from '../../../../../constants';
import { expandedWeatherCode } from '../../../../../constants/weather-code';
//  local helpers
import getAsset from './get-asset';
import getColorMode from './get-color-mode';

type Props = {
  code: number;
  day: boolean;
  size: string;
};

const WeatherIcon = (props: Props) => {
  const { code, day, size = '1em' } = props;
  const timeOfDay = day ? TIME_OF_DAY_IS_DAY_TIME : TIME_OF_DAY_IS_NIGHT_TIME;
  const asset = getAsset({ icons: expandedWeatherCode, code, icon: timeOfDay });
  const colorMode = getColorMode({ timeOfDay, theme: asset.theme });

  const color = useColorModeValue(colorMode['light'], colorMode['dark']);

  return (
    <Icon
      as={asset.icon}
      color={color}
      fontSize={size}
      sx={{ marginTop: '-10%', marginRight: '-4em' }}
    />
  );
};

export default WeatherIcon;
