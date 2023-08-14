import React, { FC } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
//  components
import InputForFloatingFormControl from '../../../components/input-for-floating-form-control';

type PayloadHandleOnChange = {
  target: {
    value: string;
  };
};

type PropsOptionsOption = {
  label: string;
  value: string;
};

type PropsStandardInput = {
  as?: FC;
  field: {
    defaultValue?: string;
    key?: string;
    helper?: string;
    label?: string;
    options?: Array<PropsOptionsOption>;
    placeholder?: string;
    type?: string;
    value?: string;
  };
  handler: Function;
};

const StandardInput = (props: PropsStandardInput) => {
  const { as = undefined, field = {}, handler = () => {} } = props;
  const {
    defaultValue = '',
    key = '',
    helper = '',
    label = '',
    options = [],
    placeholder = '',
    type = 'text',
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
        // isRequired
        // isInvalid={!validation}
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
