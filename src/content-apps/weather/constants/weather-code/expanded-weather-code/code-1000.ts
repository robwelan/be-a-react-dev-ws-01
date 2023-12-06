//  react icons
import { WiDaySunny } from 'react-icons/wi';
import { WiNightClear } from 'react-icons/wi';
//  constants
import {
  TIME_OF_DAY_IS_DAY_TIME,
  TIME_OF_DAY_IS_NIGHT_TIME,
} from '../../index';

const code = {
  day: WiDaySunny,
  night: WiNightClear,
  label: 'Clear',
  theme: {
    [TIME_OF_DAY_IS_DAY_TIME]: {
      dark: '#ffff00',
      light: '#FFA500',
    },
    [TIME_OF_DAY_IS_NIGHT_TIME]: {
      dark: '##5C758B',
      light: '#520081',
    },
  },
};

export default code;
