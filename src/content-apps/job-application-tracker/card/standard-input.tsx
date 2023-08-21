import React from 'react';
import { FormControl } from '@chakra-ui/react';
//  components
import InputForFloatingFormControl from '../../../components/input-for-floating-form-control';
//  interfaces and types
import {
  PayloadHandleOnChange,
  PropsStandardInput,
} from './interfaces-and-types';

const StandardInput = (props: PropsStandardInput) => {
  const { as = undefined, field = {} as any, handler = () => {} } = props;
  const {
    defaultValue = '',
    key = '',
    helper = '',
    isRequired = false,
    isInvalid = false,
    label = '',
    options = [],
    placeholder = '',
    type,
    value = '',
  } = field;

  const handleOnChange = (payload: PayloadHandleOnChange) => {
    const { target } = payload;
    const { value } = target;

    handler({
      key,
      type,
      value,
    });
  };

  return (
    <>
      <FormControl
        as={as}
        id={key}
        isRequired={isRequired}
        isInvalid={isInvalid}
        variant="floating"
      >
        <InputForFloatingFormControl
          defaultValue={defaultValue}
          label={label}
          onChange={handleOnChange}
          options={options}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </FormControl>
    </>
  );
};

export default StandardInput;
