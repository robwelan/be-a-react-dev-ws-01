import React from 'react';
//  chakra-ui
import { Button } from '@chakra-ui/react';
//  react icons
import { HiOutlineClipboardCopy } from '@react-icons/all-files/hi/HiOutlineClipboardCopy';
//  actions
import doSetIsCopied from '../../actions/do-set-is-copied';

const CopyToClipboard = (props) => {
  const { setState, state } = props;
  const { booleans, strings } = state;
  const { isCopied } = booleans;
  const { description } = strings;

  const handleCopy = () => {
    navigator.clipboard.writeText(description);
    doSetIsCopied({ setState, value: true });
  };

  return (
    <Button
      leftIcon={<HiOutlineClipboardCopy />}
      colorScheme="blue"
      isLoading={isCopied}
      onClick={handleCopy}
    >
      {isCopied ? 'Copied' : 'Copy To Clipboard'}
    </Button>
  );
};

export default CopyToClipboard;
