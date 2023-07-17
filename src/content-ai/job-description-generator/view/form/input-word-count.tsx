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
//  lodash
import { get as _Get } from 'lodash';
//  constants
import {
  FORM_INPUT_WORD_MAX,
  FORM_INPUT_WORD_MIN,
  FORM_INPUT_WORD_STEP,
} from '../../constants';
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
        min={FORM_INPUT_WORD_MIN}
        max={FORM_INPUT_WORD_MAX}
        onChange={(valueString) =>
          setStateKeyValue({
            key,
            setState,
            value: valueString,
          })
        }
        placeholder=" "
        step={FORM_INPUT_WORD_STEP}
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
