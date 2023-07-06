import React from 'react';
//  chakra-ui
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { get as _Get } from 'lodash';
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
        <option value="default">Default</option>
        <option value="casual">Casual</option>
        <option value="friendly">Friendly</option>
        <option value="professional">Professional</option>
        <option value="formal">Formal</option>
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
