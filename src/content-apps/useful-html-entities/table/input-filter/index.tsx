import React from 'react';
//  chakra-ui
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { CloseIcon, Search2Icon } from '@chakra-ui/icons';
//  recoil
import { useRecoilState } from 'recoil';
//  local utilities
import clearFilterValue from './utilities/clear-filter-value';
import setFilterValue from './utilities/set-filter-value';
//  local state
import { htmlEntitiesFilterState } from '../../state/atoms';

const InputFilter = () => {
  const [filter, setFilter] = useRecoilState(htmlEntitiesFilterState);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.300" />
      </InputLeftElement>
      <Input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target) {
            const { value = '' } = event.target;

            setFilterValue({ value, setValue: setFilter });
          }
        }}
        placeholder="Search..."
        value={filter}
      />
      <InputRightElement>
        <CloseIcon
          color="gray.300"
          onClick={() => {
            clearFilterValue({ setValue: setFilter });
          }}
          sx={{ cursor: 'pointer' }}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default InputFilter;
