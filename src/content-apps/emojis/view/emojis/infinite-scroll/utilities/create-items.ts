//  default state
import defaultState from './default-state';
//  recoil types
import { TypeArrayOfEmojis } from '../../../../state/types';

type createItemsPayload = {
  emojis: TypeArrayOfEmojis;
  offset: number;
};

const createItems = async (payload: createItemsPayload) => {
  const { emojis, offset = 50 } = payload;

  try {
    const items = await Promise.resolve(emojis.slice(0, offset));

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
