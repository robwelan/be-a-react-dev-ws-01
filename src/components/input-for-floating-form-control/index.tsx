import React, { useState } from 'react';
//  chakra-ui
import { FormHelperText, FormLabel, Input } from '@chakra-ui/react';
//  local components
import InputControlType from './control-type-input';
import SelectControlType from './control-type-select';
// types and interfaces
import {
  Control,
  DataType,
  PropsOptionsOption,
} from './define-types-and-interfaces';

type Props = {
  defaultValue?: string;
  helperText?: string;
  label?: string;
  onChange?: Function;
  options: Array<PropsOptionsOption>;
  placeholder?: string;
  type: {
    control: Control;
    data: DataType;
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

    if (type.control === 'select' && value === '') {
      setPlaceholder(propPlaceholder);
      return;
    }

    setPlaceholder(' ');
    return;
  };

  const handleOnFocus = () => {
    setHasFocus(true);
    if (type.control === 'select') {
      setPlaceholder(propPlaceholder);
      return;
    }

    if (type.control === 'text' && value === '' && propPlaceholder !== '') {
      setPlaceholder(propPlaceholder);
      return;
    }

    return;
  };

  return (
    <>
      {type.control === 'select' && (
        <SelectControlType
          onBlur={handleOnBlur}
          onChange={(e) => onChange(e)}
          onFocus={handleOnFocus}
          options={options}
          placeholder={hasFocus ? placeholder : label}
          value={value || defaultValue}
        />
      )}
      {(type.control === 'text' || type.control === 'url') && (
        <InputControlType
          onBlur={handleOnBlur}
          onChange={(e) => onChange(e)}
          onFocus={handleOnFocus}
          placeholder={placeholder}
          type={type.control}
          value={value || defaultValue}
        />
      )}
      {type.control === 'select' && hasFocus && <FormLabel>{label}</FormLabel>}
      {type.control === 'select' && !hasFocus && value !== '' && (
        <FormLabel>{label}</FormLabel>
      )}
      {type.control === 'text' && <FormLabel>{label}</FormLabel>}
      {helperText !== '' && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
};

export default InputForFloatingFormControl;
