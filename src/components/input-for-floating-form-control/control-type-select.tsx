import React, { FocusEventHandler } from 'react';
//  chakra-ui
import { Select } from '@chakra-ui/react';
//  types and interfaces
import { SelectOptionsOption } from './define-types-and-interfaces';

type ContentOptionsIndex = number;

type ContentOptionsOption = {
  label: string;
  value: string;
};

type Props = {
  defaultValue?: string;
  onBlur?: FocusEventHandler;
  onChange?: Function;
  onFocus?: FocusEventHandler;
  options: Array<SelectOptionsOption>;
  placeholder?: string;
  value?: string;
};

const SelectControlType = (props: Props) => {
  const {
    defaultValue = '',
    onBlur: handleOnBlur = () => {},
    onChange: handleOnChange = () => {},
    onFocus: handleOnFocus = () => {},
    options = [],
    placeholder = '',
    value = '',
  } = props;

  return (
    <Select
      onBlur={handleOnBlur}
      onChange={(e) => handleOnChange(e)}
      onFocus={handleOnFocus}
      placeholder={placeholder}
      value={value || defaultValue}
    >
      {options &&
        options.map(
          (option: ContentOptionsOption, index: ContentOptionsIndex) => {
            const { label = '', value = '' } = option;

            return (
              <option key={index} value={value}>
                {label}
              </option>
            );
          },
        )}
    </Select>
  );
};

export default SelectControlType;
