/*
    return {
      description: '',
      icon: ,
      specifications: '',
      value: ,
    }
  */

import {
  WiWindBeaufort0,
  WiWindBeaufort1,
  WiWindBeaufort2,
  WiWindBeaufort3,
  WiWindBeaufort4,
  WiWindBeaufort5,
  WiWindBeaufort6,
  WiWindBeaufort7,
  WiWindBeaufort8,
  WiWindBeaufort9,
  WiWindBeaufort10,
  WiWindBeaufort11,
  WiWindBeaufort12,
} from 'react-icons/wi';

import { MAGIC_NUMBER_METERS_PER_SECOND_TO_KILOMETERS_PER_HOUR } from '../constants/magic-numbers';

type Payload = {
  speed: {
    value: number;
  };
};

const getBeaufortWindScaleIcon = (payload: Payload) => {
  const { speed } = payload;

  const beaufortSpeed =
    speed.value * MAGIC_NUMBER_METERS_PER_SECOND_TO_KILOMETERS_PER_HOUR;

  if (beaufortSpeed >= 1 && beaufortSpeed < 6) {
    return {
      description: 'Light Air',
      icon: WiWindBeaufort1,
      specifications:
        'Direction shown by smoke drift but not by wind vanes. Sea rippled.',
      value: 1,
    };
  }

  if (beaufortSpeed >= 6 && beaufortSpeed < 12) {
    return {
      description: 'Light Breeze',
      icon: WiWindBeaufort2,
      specifications:
        'Wind felt on face; leaves rustle; wind vane moved by wind. Small wavelets on sea.',
      value: 2,
    };
  }

  if (beaufortSpeed >= 12 && beaufortSpeed < 20) {
    return {
      description: 'Gentle Breeze',
      icon: WiWindBeaufort3,
      specifications:
        'Leaves and small twigs in constant motion; light flags extended. Large wavelets on sea.',
      value: 3,
    };
  }

  if (beaufortSpeed >= 20 && beaufortSpeed < 29) {
    return {
      description: 'Moderate Breeze',
      icon: WiWindBeaufort4,
      specifications:
        'Raises dust and loose paper; small branches moved. Small waves, fairly frequent white horses.',
      value: 4,
    };
  }

  if (beaufortSpeed >= 29 && beaufortSpeed < 38) {
    return {
      description: 'Fresh Breeze',
      icon: WiWindBeaufort5,
      specifications:
        'Small trees in leaf begin to sway; crested wavelets form on inland waters. Moderate waves, many white horses.',
      value: 5,
    };
  }

  if (beaufortSpeed >= 38 && beaufortSpeed < 50) {
    return {
      description: 'Strong Breeze',
      icon: WiWindBeaufort6,
      specifications:
        'Large branches in motion; whistling heard in telegraph wires; umbrellas used with difficulty. Large waves, extensive foam crests',
      value: 6,
    };
  }

  if (beaufortSpeed >= 50 && beaufortSpeed < 62) {
    return {
      description: 'Near Gale',
      icon: WiWindBeaufort7,
      specifications:
        'Whole trees in motion; inconvenience felt when walking against the wind. Foam blown in streaks across the sea.',
      value: 7,
    };
  }

  if (beaufortSpeed >= 62 && beaufortSpeed < 75) {
    return {
      description: 'Gale',
      icon: WiWindBeaufort8,
      specifications:
        'Twigs break off trees, generally impedes progress. Wave crests begin to break into spindrift.',
      value: 8,
    };
  }

  if (beaufortSpeed >= 75 && beaufortSpeed < 89) {
    return {
      description: 'Strong Gale',
      icon: WiWindBeaufort9,
      specifications:
        'Slight structural damage (chimney pots and slates removed). Wave crests topple over, and spray affects visibility',
      value: 9,
    };
  }

  if (beaufortSpeed >= 89 && beaufortSpeed < 103) {
    return {
      description: 'Storm',
      icon: WiWindBeaufort10,
      specifications:
        'Seldom experienced inland; trees uprooted; considerable structural damage. Sea surface is largely white.',
      value: 10,
    };
  }

  if (beaufortSpeed >= 103 && beaufortSpeed < 118) {
    return {
      description: 'Violent Storm',
      icon: WiWindBeaufort11,
      specifications:
        'Very rarely experienced, accompanied by widespread damage. Medium-sized ships lost to view behind waves. Sea covered in white foam, visibility seriously affected.',
      value: 11,
    };
  }

  if (beaufortSpeed >= 118) {
    return {
      description: 'Hurricane',
      icon: WiWindBeaufort12,
      specifications:
        'Devastation. Air filled with foam and spray, very poor visibility.',
      value: 12,
    };
  }

  return {
    description: 'Calm',
    icon: WiWindBeaufort0,
    specifications: 'Smoke rises vertically. Sea like a mirror.',
    value: 0,
  };
};

export default getBeaufortWindScaleIcon;
