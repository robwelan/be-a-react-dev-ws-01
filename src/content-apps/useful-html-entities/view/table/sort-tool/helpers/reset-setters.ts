//  types
import { PayloadResetSetters } from './types';

const resetSetters = (payload: PayloadResetSetters) => {
  const { setEntitiesState, setFootnotesState, setOrderState } = payload;

  setEntitiesState((prevState) => ({
    ...prevState,
    sorted: false,
  }));

  setFootnotesState((prevState) => ({
    ...prevState,
    sorted: false,
  }));

  setOrderState((prevState) => ({
    ...prevState,
    sorted: false,
  }));
};

export default resetSetters;
