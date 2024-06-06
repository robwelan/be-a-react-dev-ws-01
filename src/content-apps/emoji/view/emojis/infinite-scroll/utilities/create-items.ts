//  recoil
import { useRecoilValue } from 'recoil';
//  state
import { emojiFakeAPI } from '../../../../state/atoms';

type createItemsPayload = {
  rows: {
    first: number;
    last: number;
  };
};

const createItems = async (payload: createItemsPayload) => {
  const {
    rows: { first = 0, last = 50 },
  } = payload;
  const resultObject = {
    error: false,
    data: {
      emojis: [],
      error: {},
      length: 0,
    },
  };

  try {
    const api = useRecoilValue(emojiFakeAPI);

    const items = api.emojis.slice(first, last);

    return {
      ...resultObject,
      data: {
        ...resultObject.data,
        emojis: items,
        length: items && items.length ? items.length : 0,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      ...resultObject,
      error: true,
      data: {
        ...resultObject.data,
        error,
      },
    };
  }
};

export default createItems;
