/*
  Choices:
    (NOTE: first option is default)
    column: Character, Alphanumeric, Unicode, Type
    order: ascending, descending
*/

//constants
import {
  SORT_BY_COLUMN_ALPHANUMERIC,
  SORT_BY_COLUMN_CHARACTER,
  SORT_BY_COLUMN_TYPE,
  SORT_BY_COLUMN_UNICODE,
  SORT_BY_ORDER_ASCENDING,
  SORT_BY_ORDER_DESCENDING,
} from '../constants/sorting';
//  state types
import { Entities, EntitiesState, SortColumns } from '../state/types';

type Payload = {
  entities: Entities;
  setEntities: React.Dispatch<React.SetStateAction<EntitiesState>>;
  sort: {
    column: string;
    order: string;
    sorted: boolean;
  };
};

const sortEntitiesTableColumn = (payload: Payload) => {
  const { entities, setEntities, sort } = payload;
  const { column, order, sorted } = sort;
  const newEntities = [...entities];

  //  no need to sort if the full job is done
  if (sorted) {
    //  if we get called here, there is a bug
    console.error(
      'Function sortEntitiesTableColumn was called but sortState.sorted is TRUE.',
    );

    return;
  }

  newEntities.sort((a: SortColumns, b: SortColumns) => {
    const columnA = a[column as keyof typeof a].toUpperCase(); // ignore upper and lowercase
    const columnB = b[column as keyof typeof b].toUpperCase(); // ignore upper and lowercase

    if (order === SORT_BY_ORDER_ASCENDING) {
      if (columnA < columnB) {
        return -1;
      }
      if (columnA > columnB) {
        return 1;
      }
    }

    if (order === SORT_BY_ORDER_DESCENDING) {
      if (columnA > columnB) {
        return -1;
      }
      if (columnA < columnB) {
        return 1;
      }
    }

    // columns must be equal
    return 0;
  });

  setEntities((prevState: EntitiesState) => ({
    ...prevState,
    entities: newEntities,
    sorted: true,
  }));
};

export default sortEntitiesTableColumn;
