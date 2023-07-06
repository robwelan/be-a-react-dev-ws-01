import React from 'react';
//  chakra-ui
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { get as _Get } from 'lodash';
//  local actions
import setStateKeyValue from '../../actions/set-state-key-string-value';

const InputWordCount = (props) => {
  const { setState, state } = props;
  const key = 'numbers.words';
  const validation = _Get(state, `validation.${key}`, true);
  const value = _Get(state, key, '');

  return (
    <FormControl
      id="word-count"
      isRequired
      isInvalid={!validation}
      variant="floating"
    >
      <NumberInput
        defaultValue={value}
        min={0}
        max={1000}
        onChange={(valueString) =>
          setStateKeyValue({
            key,
            setState,
            value: valueString,
          })
        }
        placeholder=" "
        step={10}
        value={`${value}`}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormLabel>Word Count</FormLabel>
      {validation && (
        <FormHelperText>
          Required: the word count of the job role output
        </FormHelperText>
      )}
      {!validation && (
        <FormErrorMessage>The word count must be a number.</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputWordCount;
