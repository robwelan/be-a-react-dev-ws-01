import React from 'react';
//  chakra-ui
import { HStack, Select, Text } from '@chakra-ui/react';
//  recoil
import { useRecoilState } from 'recoil';
//  state
import { todoListFilterState } from '../state';

type EventPayload = {
  target?: {
    value?: string;
  };
};

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (payload: EventPayload) => {
    const { target = {} } = payload;
    const { value = '' } = target;

    setFilter(value);
  };

  return (
    <HStack>
      <Text>Filter:</Text>
      <Select onChange={updateFilter} value={filter} width="8em">
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </Select>
    </HStack>
  );
}

export default TodoListFilters;
