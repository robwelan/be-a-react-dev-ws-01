import React from 'react';
//  constants
import {
  SORT_BY_COLUMN_ALPHANUMERIC,
  SORT_BY_COLUMN_CHARACTER,
  SORT_BY_COLUMN_TYPE,
  SORT_BY_COLUMN_UNICODE,
  SORT_BY_ORDER_ASCENDING,
  SORT_BY_ORDER_DESCENDING,
} from '../../../constants/sorting';
//  helpers
import checkIsCurrentColumn from './check-is-current-column';
import getCorrectOrder from './get-correct-order';
import resetSetters from './reset-setters';
//  types
import { PayloadResetSetters, PayloadSetSortSettings } from './types';

const setSortSettings = (payload: PayloadSetSortSettings) => {
  const { main, setters } = payload;
  const { control, state, setState } = main;

  const isCurrentColumn = checkIsCurrentColumn({
    column: state.column,
    control,
  });

  const correctOrder = getCorrectOrder({ order: state.order });

  if (isCurrentColumn) {
    //  only the order needs to change
  }

  if (!isCurrentColumn) {
    //  column needs to change and order needs to be set to ascending
  }
};

export default setSortSettings;
