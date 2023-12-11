//  types
import { PayloadCheckIsCurrentColumn } from './types';

const checkIsCurrentColumn = (payload: PayloadCheckIsCurrentColumn) => {
  const { column, control } = payload;

  if (column === control) {
    return true;
  }

  return false;
};

export default checkIsCurrentColumn;
