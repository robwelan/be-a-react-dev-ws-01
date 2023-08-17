import React, { useState } from 'react';
//  chakra-ui
import { FormHelperText, FormLabel, Input } from '@chakra-ui/react';
//  local components
import InputControlType from './control-type-input';
import SelectControlType from './control-type-select';
// types and interfaces
import {
  Controls,
  DataTypesForHtml,
  SelectOptionsOption,
} from './define-types-and-interfaces';

type Props = {
  defaultValue?: string;
  helperText?: string;
  label?: string;
  onChange?: Function;
  options: Array<SelectOptionsOption>;
  placeholder?: string;
  type: {
    control: string;
    data: string;
  };
  value?: string;
};

const InputForFloatingFormControl = (props: Props) => {
  const {
    defaultValue = '',
    label = '',
    helperText = '',
    placeholder: propPlaceholder = '',
    onChange = () => {},
    options = [],
    type,
    value = '',
  } = props;
  const [hasFocus, setHasFocus] = useState(false);
  const [placeholder, setPlaceholder] = useState(' ');

  const handleOnBlur = () => {
    setHasFocus(false);

    if (type.control === Controls.Select && value === '') {
      setPlaceholder(propPlaceholder);
      return;
    }

    setPlaceholder(' ');
    return;
  };

  const handleOnFocus = () => {
    setHasFocus(true);
    if (type.control === Controls.Select) {
      setPlaceholder(propPlaceholder);
      return;
    }

    if (
      type.control === Controls.Text &&
      value === '' &&
      propPlaceholder !== ''
    ) {
      setPlaceholder(propPlaceholder);
      return;
    }

    return;
  };

  return (
    <>
      {type.control === Controls.Select && (
        <SelectControlType
          onBlur={handleOnBlur}
          onChange={(e) => onChange(e)}
          onFocus={handleOnFocus}
          options={options}
          placeholder={hasFocus ? placeholder : label}
          value={value || defaultValue}
        />
      )}
      {(type.control === Controls.Date ||
        type.control === Controls.Text ||
        type.control === Controls.URL) && (
        <InputControlType
          onBlur={handleOnBlur}
          onChange={(e) => onChange(e)}
          onFocus={handleOnFocus}
          placeholder={placeholder}
          type={type.control}
          value={value || defaultValue}
        />
      )}
      {type.control === Controls.Select && hasFocus && (
        <FormLabel>{label}</FormLabel>
      )}
      {type.control === Controls.Select && !hasFocus && value !== '' && (
        <FormLabel>{label}</FormLabel>
      )}
      {(type.control === Controls.Date ||
        type.control === Controls.Text ||
        type.control === Controls.URL) && <FormLabel>{label}</FormLabel>}
      {helperText !== '' && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
};

export default InputForFloatingFormControl;
