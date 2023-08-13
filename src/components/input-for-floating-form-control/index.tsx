import React, { useState } from 'react';
//  chakra-ui
import { FormHelperText, FormLabel, Input } from '@chakra-ui/react';

type Props = {
  helperText?: string;
  label?: string;
  onChange?: Function;
  placeholder?: string;
  type?: string;
  value?: string;
};

const InputForFloatingFormControl = (props: Props) => {
  const {
    label = '',
    helperText = '',
    placeholder: propPlaceholder = '',
    onChange = () => {},
    type = 'text',
    value = '',
  } = props;
  const [placeholder, setPlaceholder] = useState(' ');

  const handleOnBlur = () => {
    setPlaceholder(' ');
  };

  const handleOnFocus = () => {
    if (value === '' && propPlaceholder !== '') {
      setPlaceholder(propPlaceholder);
    }
  };

  return (
    <>
      <Input
        onBlur={handleOnBlur}
        onChange={(e) => onChange(e)}
        onFocus={handleOnFocus}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      <FormLabel>{label}</FormLabel>
      {helperText !== '' && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
};

export default InputForFloatingFormControl;
