import React from 'react';
//  chakra-ui
import { Input } from '@chakra-ui/react';

type Props = {
  handleOnChange: Function;
  placeholder: string;
  value: string;
};

const BasicInput = (props: Props) => {
  const { handleOnChange, placeholder, value } = props;

  return (
    <Input
      onChange={(event) => {
        handleOnChange(event);
      }}
      placeholder={placeholder}
      type="text"
      value={value}
      variant="outline"
    />
  );
};

export default BasicInput;
