import React from 'react';
//  chakra-ui
import { IconButton } from '@chakra-ui/react';
import { ArrowUpDownIcon } from '@chakra-ui/icons';
//  recoil
import { useSetRecoilState } from 'recoil';
//  constants
import {
  SORT_BY_COLUMN_ALPHANUMERIC,
  SORT_BY_COLUMN_CHARACTER,
  SORT_BY_COLUMN_TYPE,
  SORT_BY_COLUMN_UNICODE,
  SORT_BY_ORDER_ASCENDING,
  SORT_BY_ORDER_DESCENDING,
} from '../../constants/sorting';
//  local helpers
import setSortSettings from './helpers/set-sort-settings';
//  recoil state
import {
  htmlEntitiesState,
  htmlEntitiesFootnotesState,
  htmlEntitiesOrderState,
} from '../../state/atoms';
//  recoil state types
import { SortState } from '../../state/types';

type Props = {
  ariaLabel: string;
  control: string;
  state: SortState;
  setState: React.Dispatch<React.SetStateAction<SortState>>;
};

const SortTool = (props: Props) => {
  const { ariaLabel, control, state, setState } = props;
  const setEntitiesState = useSetRecoilState(htmlEntitiesState);
  const setFootnotesState = useSetRecoilState(htmlEntitiesFootnotesState);
  const setOrderState = useSetRecoilState(htmlEntitiesOrderState);

  return (
    <IconButton
      aria-label={ariaLabel}
      icon={<ArrowUpDownIcon />}
      onClick={() =>
        setSortSettings({
          main: {
            control,
            state,
            setState,
          },
          setters: {
            setEntitiesState,
            setFootnotesState,
            setOrderState,
          },
        })
      }
      sx={{ height: '1.5em', minWidth: '1.5em' }}
    />
  );
};

export default SortTool;
