import React, { useState } from 'react';
//  chakra-ui
import { Button, HStack } from '@chakra-ui/react';
//  recoil
import { useSetRecoilState } from 'recoil';
//  actions
import createItem from '../actions/create-item';
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
        onClick={() => {
          createItem({ setState: setTodoList, value: inputValue });
          setInputValue('');
        }}
      >
        Create
      </Button>
      <BasicInput
        handleOnChange={(event: EventPayload) => onChange(event)}
        value={inputValue}
      />
    </HStack>
  );
};

export default TodoItemCreator;
