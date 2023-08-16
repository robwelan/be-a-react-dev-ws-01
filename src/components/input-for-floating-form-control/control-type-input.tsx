import React, { FocusEventHandler } from 'react';
//  chakra-ui
import { Input } from '@chakra-ui/react';

type Props = {
  defaultValue?: string;
  key: string;
  onBlur?: FocusEventHandler;
  onChange?: Function;
  onFocus?: FocusEventHandler;
  placeholder?: string;
  type?: string;
  value?: string;
};

const InputControlType = (props: Props) => {
  const {
    defaultValue = '',
    key,
    onBlur: handleOnBlur = () => {},
    onChange: handleOnChange = () => {},
    onFocus: handleOnFocus = () => {},
    placeholder = '',
    type = 'text',
    value = '',
  } = props;

  return (
    <Input
      id={key}
      name={key}
      onBlur={handleOnBlur}
      onChange={(e) => handleOnChange(e)}
      onFocus={handleOnFocus}
      placeholder={placeholder}
      type={type}
      value={value || defaultValue}
    />
  );
};

export default InputControlType;
