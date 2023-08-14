import React from 'react';
//  chakra-ui
import { Select } from '@chakra-ui/react';

const SelectControlType = (props) => {
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
        options.map((option, index) => {
          const { label = '', value = '' } = option;

          return (
            <option key={index} value={value}>
              {label}
            </option>
          );
        })}
    </Select>
  );
};

export default SelectControlType;
