import React from 'react';
//  chakra-ui
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { get as _Get } from 'lodash';
//  local actions
import setStateKeyValue from '../../actions/set-state-key-string-value';

const InputIndustry = (props) => {
  const { setState, state } = props;
  const key = 'strings.industry';
  // const validation = _Get(state, `validation.${key}`, true);
  const value = _Get(state, key, '');

  return (
    <FormControl
      id="industry"
      // isRequired
      // isInvalid={!validation}
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
      <FormLabel>Industry</FormLabel>
      <FormHelperText>
        Optional: Enter the industry of the job role.
      </FormHelperText>
    </FormControl>
  );
};

export default InputIndustry;
