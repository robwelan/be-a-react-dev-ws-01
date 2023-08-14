import React, { useState } from 'react';
//  chakra-ui
import { FormHelperText, FormLabel, Input } from '@chakra-ui/react';
//  local components
import InputControlType from './control-type-input';
import SelectControlType from './control-type-select';

type SelectOption = {
  label: string;
  value: string;
};
type Props = {
  defaultValue?: string;
  helperText?: string;
  label?: string;
  onChange?: Function;
  options: Array<SelectOption>;
  placeholder?: string;
  type?: string;
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
    type = 'text',
    value = '',
  } = props;
  const [hasFocus, setHasFocus] = useState(false);
  const [placeholder, setPlaceholder] = useState(' ');

  const handleOnBlur = () => {
    setHasFocus(false);

    if (type === 'select' && value === '') {
      setPlaceholder(propPlaceholder);
      return;
    }

    setPlaceholder(' ');
    return;
  };

  const handleOnFocus = () => {
    setHasFocus(true);
    if (type === 'select') {
      setPlaceholder(propPlaceholder);
      return;
    }

    if (type === 'text' && value === '' && propPlaceholder !== '') {
      setPlaceholder(propPlaceholder);
      return;
    }

    return;
  };

  return (
    <>
      {type === 'select' && (
        <SelectControlType
          onBlur={handleOnBlur}
          onChange={(e) => onChange(e)}
          onFocus={handleOnFocus}
          options={options}
          placeholder={hasFocus ? placeholder : label}
          type={type}
          value={value || defaultValue}
        />
      )}
      {(type === 'text' || type === 'url') && (
        <InputControlType
          onBlur={handleOnBlur}
          onChange={(e) => onChange(e)}
          onFocus={handleOnFocus}
          placeholder={placeholder}
          type={type}
          value={value || defaultValue}
        />
      )}
      {type === 'select' && hasFocus && <FormLabel>{label}</FormLabel>}
      {type === 'select' && !hasFocus && value !== '' && (
        <FormLabel>{label}</FormLabel>
      )}

      {type === 'text' && <FormLabel>{label}</FormLabel>}
      {helperText !== '' && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
};

export default InputForFloatingFormControl;
