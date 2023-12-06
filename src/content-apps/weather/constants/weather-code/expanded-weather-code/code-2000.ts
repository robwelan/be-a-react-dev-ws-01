//  react icons
import { WiDayFog } from 'react-icons/wi';
import { WiNightFog } from 'react-icons/wi';
//  constants
import {
  TIME_OF_DAY_IS_DAY_TIME,
  TIME_OF_DAY_IS_NIGHT_TIME,
} from '../../index';

const code = {
  day: WiDayFog,
  night: WiNightFog,
  label: 'Fog',
  theme: {
    [TIME_OF_DAY_IS_DAY_TIME]: {
      dark: '#DFDFDF',
      light: '#C5C5C5',
    },
    [TIME_OF_DAY_IS_NIGHT_TIME]: {
      dark: '#DFDFDF',
      light: '#C5C5C5',
    },
  },
};

export default code;
