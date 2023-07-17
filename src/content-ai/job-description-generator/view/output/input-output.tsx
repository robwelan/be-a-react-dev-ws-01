import React from 'react';
//  chakra-ui
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
//  lodash
import { get as _Get } from 'lodash';
//  constants
import { FORM_INPUT_KEYWORDS_ROWS } from '../../constants';

const InputOutput = (props) => {
  const { state } = props;
  const key = 'strings.description';
  const validation = _Get(state, `validation.${key}`, true);
  const value = _Get(state, key, '');

  return (
    <FormControl
      id="response"
      // isRequired
      isDisabled={value === ''}
      isInvalid={!validation}
      variant="floating"
    >
      <Textarea
        placeholder=" "
        resize="vertical"
        rows={
          value === ''
            ? FORM_INPUT_KEYWORDS_ROWS
            : value.split('\\n').length + FORM_INPUT_KEYWORDS_ROWS
        }
        value={value.split('\\n')}
      />
      <FormLabel>Keywords</FormLabel>
      {validation && (
        <FormHelperText>Output: The response from the AI.</FormHelperText>
      )}
      {!validation && (
        <FormErrorMessage>The output is hazy. Try again.</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputOutput;
