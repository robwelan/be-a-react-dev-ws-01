//  recoil
import { useRecoilValue } from 'recoil';
//  state
import { emojiFakeAPI } from '../../../../state/atoms';
//  default state
import defaultState from './default-state';
//  recoil types
import { TypeArrayOfEmojis } from '../../../../state/types';

type createItemsPayload = {
  emojis: TypeArrayOfEmojis;
  rows: {
    first: number;
    last: number;
  };
};

const createItems = (payload: createItemsPayload) => {
  const {
    emojis,
    rows: { first = 0, last = 50 },
  } = payload;

  try {
    const items = emojis.slice(first, last);

    return {
      ...defaultState,
      data: {
        ...defaultState.data,
        emojis: items,
        length: items && items.length ? items.length : 0,
        processed: true,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      ...defaultState,
      error: true,
      data: {
        ...defaultState.data,
        error,
        processed: true,
      },
    };
  }
};

export default createItems;
