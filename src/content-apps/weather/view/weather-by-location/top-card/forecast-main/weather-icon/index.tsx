import React from 'react';
//  chakra-ui
import { Icon, useColorModeValue } from '@chakra-ui/react';
//  constants
import { expandedWeatherCode } from '../../../../../constants/weather-code';
//  local helpers
import getAsset from './get-asset';

type Props = {
  code: number;
  day: boolean;
  size: string;
};

const WeatherIcon = (props: Props) => {
  const { code, day, size = '1em' } = props;
  const icon = day ? 'day' : 'night';
  const asset = getAsset({ icons: expandedWeatherCode, code, icon });
  const color = useColorModeValue(asset.theme['light'], asset.theme['dark']);

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
