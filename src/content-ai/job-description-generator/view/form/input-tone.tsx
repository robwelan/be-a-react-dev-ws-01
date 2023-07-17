import React from 'react';
//  chakra-ui
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
} from '@chakra-ui/react';
//  lodash
import { get as _Get } from 'lodash';
import {
  FORM_INPUT_TONE_CASUAL,
  FORM_INPUT_TONE_FORMAL,
  FORM_INPUT_TONE_FRIENDLY,
  FORM_INPUT_TONE_NEUTRAL,
  FORM_INPUT_TONE_PROFESSIONAL,
} from '../../constants';
//  local actions
import setStateKeyValue from '../../actions/set-state-key-string-value';

const InputTone = (props) => {
  const { setState, state } = props;
  const key = 'strings.tone';
  const validation = _Get(state, `validation.${key}`, true);
  const value = _Get(state, key, '');

  return (
    <FormControl
      id="tone"
      isRequired
      isInvalid={!validation}
      variant="floating"
    >
      <Select
        onChange={(e) =>
          setStateKeyValue({
            key,
            setState,
            value: e.target.value,
          })
        }
        value={value}
      >
        <option value={FORM_INPUT_TONE_NEUTRAL}>Neutral</option>
        <option value={FORM_INPUT_TONE_CASUAL}>Casual</option>
        <option value={FORM_INPUT_TONE_FRIENDLY}>Friendly</option>
        <option value={FORM_INPUT_TONE_PROFESSIONAL}>Professional</option>
        <option value={FORM_INPUT_TONE_FORMAL}>Formal</option>
      </Select>
      <FormLabel>Tone</FormLabel>
      {validation && (
        <FormHelperText>
          Required: set the tone of the job description.
        </FormHelperText>
      )}
      {!validation && (
        <FormErrorMessage>The tone is required.</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputTone;
