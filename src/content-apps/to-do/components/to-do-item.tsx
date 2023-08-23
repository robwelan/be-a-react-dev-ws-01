import React from 'react';
//  chakra-ui
import { Checkbox, HStack, IconButton, Input } from '@chakra-ui/react';
//  chakra-ui icons
import { DeleteIcon } from '@chakra-ui/icons';
//  actions
import deleteItem from '../actions/delete-item';
import editItemText from '../actions/edit-item-text';
import toggleItemCompletion from '../actions/toggle-item-completion';
//  local components
import BasicInput from './basic-input';
//  recoil
import { useRecoilState } from 'recoil';
//  interfaces and types
import { TodoItem as TodoItemType } from '../state/interfaces-and-types';
//  state
import { todoListState } from '../state';

type EventPayload = {
  target?: {
    value?: string;
  };
};

type Payload = {
  item: TodoItemType;
};

const TodoItem = (payload: Payload) => {
  const { item } = payload;
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const onChange = (event: EventPayload) => {
    const { target = {} } = event;
    const { value = '' } = target;

    editItemText({
      index,
      item,
      setTodoList,
      todoList,
      value,
    });
  };

  return (
    <HStack marginTop="0.5em" gap={4}>
      <BasicInput
        handleOnChange={(event: EventPayload) => onChange(event)}
        value={item.text}
      />
      <Checkbox
        checked={item.isComplete}
        onChange={() =>
          toggleItemCompletion({
            index, //
            item,
            setTodoList,
            todoList,
          })
        }
      />
      <IconButton
        aria-label="delete item"
        icon={<DeleteIcon />}
        onClick={() =>
          deleteItem({
            todoList, //
            index,
            setTodoList,
          })
        }
      />
    </HStack>
  );
};

export default TodoItem;
