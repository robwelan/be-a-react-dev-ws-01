import React, { FocusEventHandler } from 'react';
//  chakra-ui
import { Input } from '@chakra-ui/react';
const ReactQuill =
  typeof window === 'object' ? require('react-quill') : () => false;

type Props = {
  defaultValue?: string;
  onBlur?: FocusEventHandler;
  onChange?: Function;
  onFocus?: FocusEventHandler;
  placeholder?: string;
  type?: string;
  value?: string;
};

type handleOnChangePayload = string;

const RichTextControlType = (props: Props) => {
  const {
    defaultValue = '',
    onBlur: handleOnBlur = () => {},
    onChange: handleOnChange = () => {},
    onFocus: handleOnFocus = () => {},
    placeholder = '',
    type = 'text',
    value: propValue = '',
  } = props;

  const doHandleOnChange = (payload: handleOnChangePayload) => {
    const data = {
      target: {
        value: payload,
      },
    };

    handleOnChange(data);
  };

  return (
    <ReactQuill
      as={Input}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
      placeholder={placeholder}
      theme="snow"
      value={propValue || defaultValue}
      onChange={doHandleOnChange}
      fontSize="md"
    />
  );
};

export default RichTextControlType;
