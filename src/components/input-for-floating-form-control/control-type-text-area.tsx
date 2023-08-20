import React, { FocusEventHandler, useEffect, useState } from 'react';
//  chakra-ui
import { Textarea } from '@chakra-ui/react';

type doHandleOnChangePayload = {
  target: {
    value: string;
  };
};

type Props = {
  defaultValue?: string;
  display?: string;
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
    display = '',
    onBlur: handleOnBlur = () => {},
    onChange: handleOnChange = () => {},
    onFocus: handleOnFocus = () => {},
    placeholder = '',
    value: propsValue = '',
  } = props;
  const [value, setValue] = useState('');

  const doHandleOnChange = (payload: doHandleOnChangePayload) => {
    const { target } = payload;
    const { value: targetValue = '' } = target;

    if (targetValue !== '') {
      const resultValue = targetValue.split('\n').join(', ');

      handleOnChange({ target: { value: resultValue } });
    }
  };

  //  propsValue effect
  useEffect(() => {
    if (display === 'list') {
      if (propsValue !== '') {
        const displayValue = propsValue.split(', ').join('\n');
        setValue(displayValue);
      }
    }
  }, [propsValue]);

  return (
    <Textarea
      onBlur={handleOnBlur}
      onChange={(e) => doHandleOnChange(e)}
      onFocus={handleOnFocus}
      placeholder={placeholder}
      value={value || defaultValue}
    />
  );
};

export default TextAreaControlType;
