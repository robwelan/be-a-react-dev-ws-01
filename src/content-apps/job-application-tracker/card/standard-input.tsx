import React, { FC } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
//  components
import InputForFloatingFormControl from '../../../components/input-for-floating-form-control';
// types and interfaces
import {
  Controls,
  DataTypesForHtml,
  SelectOptionsOption,
} from '../../../components/input-for-floating-form-control/define-types-and-interfaces';

type PayloadHandleOnChange = {
  target: {
    value: string;
  };
};

type Field = {
  defaultValue?: string;
  key?: string;
  helper?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  label?: string;
  options?: Array<SelectOptionsOption>;
  placeholder?: string;
  type: {
    control: string;
    data: string;
  };
  value?: string;
};

type PropsStandardInput = {
  as?: FC;
  field: Field;
  handler: Function;
};

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

export { Field };
export default StandardInput;
