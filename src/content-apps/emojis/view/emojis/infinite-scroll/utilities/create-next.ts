import { TypeEmoji } from '../../../../state/types';
import { ScrollDirection } from 'react-easy-infinite-scroll-hook';

type CreateNextPayload = {
  api: {
    data: Array<TypeEmoji>;
  };
  edge: {
    bottom: boolean;
    top: boolean;
  };
  offset: number;
  rows: {
    first: number;
    last: number;
  };
};

const createNext = async (payload: CreateNextPayload) => {
  const {
    api: { data = [] },
    edge: { bottom = false, top = false },
    offset = 0,
    rows: { first: firstRow = 0, last: lastRow = 0 },
  } = payload;
  let first = 0;
  let last = offset;
  let atBottom = false;
  let atTop = false;

  if (bottom) {
    const arrayLimit = data.length - 1;

    if (firstRow >= offset && firstRow <= data.length) {
      first = firstRow - offset;

      if (lastRow + offset < arrayLimit) {
        last = lastRow + offset;
      } else {
        last = arrayLimit;
        atBottom = true;
      }
    }
  }

  if (top) {
    if (firstRow >= offset) {
      first = firstRow - offset;
      last = lastRow;
    }
    if (firstRow <= offset) {
      first = 0;
      last = offset;
      atTop = true;
    }
  }

  return { atTop, atBottom, data: data.slice(first, last) };
};

export default createNext;
