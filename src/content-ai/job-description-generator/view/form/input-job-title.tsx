import React from 'react';
//  chakra-ui
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { get as _Get } from 'lodash';
//  local actions
import setStateKeyValue from '../../actions/set-state-key-string-value';

const InputJobTitle = (props) => {
  const { setState, state } = props;
  const key = 'strings.title';
  const validation = _Get(state, `validation.${key}`, true);
  const value = _Get(state, key, '');

  return (
    <FormControl
      id="job-title"
      isRequired
      isInvalid={!validation}
      variant="floating"
    >
      <Input
        placeholder=" "
        type="text"
        onChange={(e) =>
          setStateKeyValue({
            key,
            setState,
            value: e.target.value,
          })
        }
        value={value}
      />
      <FormLabel>Job Title</FormLabel>
      {validation && (
        <FormHelperText>Required: the name of the job role</FormHelperText>
      )}
      {!validation && (
        <FormErrorMessage>The job title is not valid.</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputJobTitle;
