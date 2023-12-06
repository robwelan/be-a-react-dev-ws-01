//  react-icons
import { WiDaySnowThunderstorm } from 'react-icons/wi';
import { WiNightSnowThunderstorm } from 'react-icons/wi';
//  constants
import {
  TIME_OF_DAY_IS_DAY_TIME,
  TIME_OF_DAY_IS_NIGHT_TIME,
} from '../../index';

const code = {
  day: WiDaySnowThunderstorm,
  night: WiNightSnowThunderstorm,
  label: 'Light Snow',
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
