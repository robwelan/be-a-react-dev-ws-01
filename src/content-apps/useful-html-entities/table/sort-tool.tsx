import React from 'react';
//  chakra-ui
import { IconButton } from '@chakra-ui/react';
import { ArrowUpDownIcon } from '@chakra-ui/icons';
//  constants
import {
  SORT_BY_COLUMN_ALPHANUMERIC,
  SORT_BY_COLUMN_CHARACTER,
  SORT_BY_COLUMN_TYPE,
  SORT_BY_COLUMN_UNICODE,
  SORT_BY_ORDER_ASCENDING,
  SORT_BY_ORDER_DESCENDING,
} from '../constants/sorting';
//  recoil state types
import { SortState } from '../state/types';

type Props = {
  ariaLabel: string;
  control: string;
  state: SortState;
  setState: React.Dispatch<React.SetStateAction<SortState>>;
};

const SortTool = (props: Props) => {
  const { ariaLabel, control, state, setState } = props;

  return (
    <IconButton
      aria-label={ariaLabel}
      icon={<ArrowUpDownIcon />}
      sx={{ height: '1.5em', minWidth: '1.5em' }}
    />
  );
};

export default SortTool;
