import React from 'react';
//  constants
import {
  DATA_SET_SORT_STEP_ENTITIES,
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
  const { setEntitiesState, setFootnotesState, setOrderState } = setters;
  let correctOrder = SORT_BY_ORDER_ASCENDING;

  const isCurrentColumn = checkIsCurrentColumn({
    column: state.column,
    control,
  });

  //  reset setters
  resetSetters({ setEntitiesState, setFootnotesState, setOrderState });

  if (isCurrentColumn) {
    //  only the order needs to change
    correctOrder = getCorrectOrder({ order: state.order });
  }

  setState((prevState) => ({
    ...prevState,

    column: control,
    order: correctOrder,
    sorted: false,
    step: DATA_SET_SORT_STEP_ENTITIES,
  }));
};

export default setSortSettings;
