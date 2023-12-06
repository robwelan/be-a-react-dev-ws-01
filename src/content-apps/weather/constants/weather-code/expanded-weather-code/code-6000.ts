//  react-icons
import { WiDaySleet } from 'react-icons/wi';
import { WiNightSleet } from 'react-icons/wi';
//  constants
import {
  TIME_OF_DAY_IS_DAY_TIME,
  TIME_OF_DAY_IS_NIGHT_TIME,
} from '../../index';

const code = {
  day: WiDaySleet,
  night: WiNightSleet,
  label: 'Freezing Drizzle',
  theme: {
    [TIME_OF_DAY_IS_DAY_TIME]: {
      dark: '#B2E0EC',
      light: '#0077FE',
    },
    [TIME_OF_DAY_IS_NIGHT_TIME]: {
      dark: '#B2E0EC',
      light: '#0077FE',
    },
  },
};

export default code;
