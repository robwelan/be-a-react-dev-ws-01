import { TypeEmoji } from '../../../../state/types';

type createItemsPayload = {
  api: {
    data: Array<TypeEmoji>;
  };
  rows: {
    first: number;
    last: number;
  };
};

const createItems = (payload: createItemsPayload) => {
  const {
    api: { data = [] },
    rows: { first = 0, last = 50 },
  } = payload;

  const items = data.slice(first, last);

  return items;
};

export default createItems;
