import React from 'react';
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

type PropsStandardInput = {
  field: {
    key?: string;
    helper?: string;
    label?: string;
    placeholder?: string;
    type?: string;
    value?: string;
  };
  handler: Function;
};

const StandardInput = (props: PropsStandardInput) => {
  const { field = {}, handler = () => {} } = props;
  const {
    key = '',
    helper = '',
    label = '',
    placeholder = '',
    type = 'string',
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
        id={key}
        // isRequired
        // isInvalid={!validation}
        variant="floating"
      >
        <InputForFloatingFormControl
          label={label}
          onChange={handleOnChange}
          placeholder={placeholder}
          type="text"
          value={value}
        />
      </FormControl>
    </>
  );
};

export default StandardInput;
