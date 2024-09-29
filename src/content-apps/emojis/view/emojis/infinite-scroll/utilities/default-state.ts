//  recoil types
import { TypeArrayOfEmojis } from '../../../../state/types';

export type TypeDefaultState = {
  error: Boolean;
  data: {
    emojis: TypeArrayOfEmojis;
    error: Object;
    length: number;
    page: number;
    processed: Boolean;
  };
};

const defaultState = {
  error: false,
  data: {
    emojis: [],
    error: {},
    length: 0,
    page: 0,
    processed: false,
  },
};

export default defaultState;
