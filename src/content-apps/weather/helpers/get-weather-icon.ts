import React from 'react';
//  react icons
import { WiDayCloudy } from 'react-icons/wi';

type Payload = {
  code: number;
  day: boolean;
};

const getWeatherIcon = (payload: Payload) => {
  const { code, day } = payload;

  if (day) {
    if (code === 1001) {
      return WiDayCloudy;
    }
  }
};

export default getWeatherIcon;
