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
//  local actions
import setStateKeyValue from '../../actions/set-state-key-array-value';

const InputKeywords = (props) => {
  const { setState, state } = props;
  const key = 'arrays.keywords';
  const validation = _Get(state, `validation.${key}`, true);
  const value = _Get(state, key, '');

  return (
    <FormControl
      id="keywords"
      isRequired
      isInvalid={!validation}
      variant="floating"
    >
      <Textarea
        onChange={(e) =>
          setStateKeyValue({
            key,
            setState,
            value: e.target.value,
          })
        }
        placeholder=" "
        resize="vertical"
        rows={FORM_INPUT_KEYWORDS_ROWS}
        value={value.join('\n')}
      />
      <FormLabel>Keywords</FormLabel>
      {validation && (
        <FormHelperText>
          Required: the keywords that summarise this role
        </FormHelperText>
      )}
      {!validation && (
        <FormErrorMessage>The keywords are not valid.</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputKeywords;
