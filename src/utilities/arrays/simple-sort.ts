type PayloadGetItem = {
  item: string;
  sensitive: boolean;
  type: string;
};

type PayloadSimpleSort = {
  compare: {
    a: any;
    b: any;
  };
  ascending: boolean;
  sensitive: boolean;
  type: string;
};

type PayloadSortString = {
  ascending: boolean;
  compare: {
    a: string;
    b: string;
  };
  type: string;
};

const getItem = (payload: PayloadGetItem) => {
  const { item, sensitive, type } = payload;

  if (type === 'string') {
    if (!sensitive) {
      return item.trim().toLowerCase();
    }

    return item.trim();
  }

  return item;
};

const sortString = (payload: PayloadSortString) => {
  const { ascending, compare, type } = payload;
  const { a, b } = compare;

  if (type !== 'string') throw new Error('Type expected is string.');

  if (ascending) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};

const simpleSort = (payload: PayloadSimpleSort) => {
  const {
    compare,
    ascending = true,
    sensitive = false,
    type = 'string',
  } = payload;
  const { a, b } = compare;
  const itemA = getItem({ item: a, sensitive, type });
  const itemB = getItem({ item: b, sensitive, type });

  if (type === 'string') {
    return sortString({ ascending, compare: { a: itemA, b: itemB }, type });
  }

  return 0;
};

export default simpleSort;
