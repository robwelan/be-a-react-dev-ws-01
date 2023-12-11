//  constants
import {
  SORT_BY_ORDER_ASCENDING,
  SORT_BY_ORDER_DESCENDING,
} from '../../../constants/sorting';
//  types
import { PayloadGetCorrectOrder } from './types';

const getCorrectOrder = (payload: PayloadGetCorrectOrder) => {
  const { order } = payload;

  if (order === SORT_BY_ORDER_ASCENDING) {
    return SORT_BY_ORDER_DESCENDING;
  }

  return SORT_BY_ORDER_ASCENDING;
};

export default getCorrectOrder;
