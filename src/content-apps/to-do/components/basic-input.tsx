import React from 'react';
//  chakra-ui
import { Input } from '@chakra-ui/react';

const BasicInput = (props) => {
  const { handleOnChange, value } = props;

  return (
    <Input
      onChange={(event) => {
        handleOnChange(event);
      }}
      placeholder="ENTER something to do"
      type="text"
      value={value}
      variant="outline"
    />
  );
};

export default BasicInput;
