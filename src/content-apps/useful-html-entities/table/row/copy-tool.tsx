import React from 'react';
//  chakra-ui
import { IconButton, Tooltip } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
//  copy to clipboard
import copy from 'copy-to-clipboard';

type Props = { ariaLabel: string; value: string };

const CopyTool = (props: Props) => {
  const { ariaLabel, value } = props;

  return (
    <Tooltip label={ariaLabel}>
      <IconButton
        aria-label={ariaLabel.toLocaleLowerCase()}
        colorScheme="purple"
        icon={<CopyIcon />}
        onClick={() => copy(value)}
        variant="outline"
        sx={{ height: '1.5em', minWidth: '1.5em' }}
      />
    </Tooltip>
  );
};

export default CopyTool;
