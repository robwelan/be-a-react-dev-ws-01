import React, { FocusEventHandler } from 'react';
//  chakra-ui
import { Textarea } from '@chakra-ui/react';

type Props = {
  defaultValue?: string;
  onBlur?: FocusEventHandler;
  onChange?: Function;
  onFocus?: FocusEventHandler;
  placeholder?: string;
  type?: string;
  value?: string;
};

const TextAreaControlType = (props: Props) => {
  const {
    defaultValue = '',
    onBlur: handleOnBlur = () => {},
    onChange: handleOnChange = () => {},
    onFocus: handleOnFocus = () => {},
    placeholder = '',
    type = 'text',
    value = '',
  } = props;

  return (
    <Textarea
      onBlur={handleOnBlur}
      onChange={(e) => handleOnChange(e)}
      onFocus={handleOnFocus}
      placeholder={placeholder}
      // type={type}
      value={value || defaultValue}
    />
  );
};

export default TextAreaControlType;
