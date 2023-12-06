//  constants
import {
  TIME_OF_DAY_IS_DAY_TIME,
  TIME_OF_DAY_IS_NIGHT_TIME,
} from '../../index';

const code = {
  day: null,
  night: null,
  label: 'Unknown',
  theme: {
    [TIME_OF_DAY_IS_DAY_TIME]: {
      dark: '#fff',
      light: '#000',
    },
    [TIME_OF_DAY_IS_NIGHT_TIME]: {
      dark: '#fff',
      light: '#000',
    },
  },
};

export default code;
