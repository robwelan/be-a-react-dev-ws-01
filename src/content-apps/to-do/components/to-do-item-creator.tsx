import React, { useState } from 'react';
//  chakra-ui
import { Button, HStack } from '@chakra-ui/react';
//  recoil
import { useSetRecoilState } from 'recoil';
//  actions
import addItem from '../actions/add-item';
//  local components
import BasicInput from './basic-input';
//  state
import { todoListState } from '../state';

type EventPayload = {
  target?: {
    value?: string;
  };
};

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const onChange = (payload: EventPayload) => {
    const { target = {} } = payload;
    const { value = '' } = target;

    setInputValue(value);
  };

  return (
    <HStack width="100%">
      <Button
        onClick={() => addItem({ inputValue, setInputValue, setTodoList })}
      >
        Add
      </Button>
      <BasicInput
        handleOnChange={(event: EventPayload) => onChange(event)}
        value={inputValue}
      />
    </HStack>
  );
};

export default TodoItemCreator;
