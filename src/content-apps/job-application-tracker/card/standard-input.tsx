import React from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

const StandardInput = (props) => {
  const { handler = () => {}, field = {} } = props;
  const {
    key = '',
    helper = '',
    label = '',
    placeholder = '',
    type = 'string',
    value = '',
  } = field;

  return (
    <>
      <FormControl
        id={key}
        // isRequired
        // isInvalid={!validation}
        variant="floating"
      >
        <Input
          placeholder=" "
          type="text"
          onChange={(e) =>
            handler({
              key,
              type,
              value: e.target.value,
            })
          }
          // placeholder={placeholder}
          value={value}
        />
        <FormLabel>{label}</FormLabel>
        {placeholder !== '' && <FormHelperText>{placeholder}</FormHelperText>}
      </FormControl>
    </>
  );
};

export default StandardInput;
