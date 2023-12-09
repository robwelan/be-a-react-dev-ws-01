import React from 'react';
//  chakra-ui
import { IconButton } from '@chakra-ui/react';
import { ArrowUpDownIcon } from '@chakra-ui/icons';

type Props = {
  ariaLabel: string;
};

const SortTool = (props: Props) => {
  const { ariaLabel } = props;

  return (
    <IconButton
      aria-label={ariaLabel}
      icon={<ArrowUpDownIcon />}
      sx={{ height: '1.5em', minWidth: '1.5em' }}
    />
  );
};

export default SortTool;
