import React from 'react';
//  chakra-ui
import { Checkbox, HStack, IconButton } from '@chakra-ui/react';
//  chakra-ui icons
import { DeleteIcon } from '@chakra-ui/icons';
//  actions
import deleteStateItem from '../actions/delete-state-item';
import updateItem from '../actions/update-item';
import updateStateItem from '../actions/update-state-item';
//  local components
import BasicInput from './basic-input';
//  recoil
import { useSetRecoilState } from 'recoil';
//  interfaces and types
import { TodoItem as TodoItemType } from '../state/interfaces-and-types';
//  state
import { todoListState } from '../state';

type EventPayload = {
  target?: {
    value?: string;
  };
};

type Props = {
  item: TodoItemType;
};

const TodoItem = (props: Props) => {
  const { item } = props;
  const setTodoList = useSetRecoilState(todoListState);

  const onChange = (event: EventPayload) => {
    const { target = {} } = event;
    const { value = '' } = target;

    const updatedItem = updateItem({ item, key: 'text', value });

    updateStateItem({
      item: updatedItem,
      key: 'id',
      setState: setTodoList,
    });
  };

  return (
    <HStack marginTop="0.5em" gap={4}>
      <BasicInput
        handleOnChange={(event: EventPayload) => onChange(event)}
        placeholder="ENTER something to do"
        value={item.text}
      />
      <Checkbox
        isChecked={item.isComplete}
        onChange={() => {
          const updatedItem = updateItem({
            item,
            key: 'isComplete',
            value: !item.isComplete,
          });

          updateStateItem({
            item: updatedItem,
            key: 'id',
            setState: setTodoList,
          });
        }}
      />
      <IconButton
        aria-label="delete item"
        icon={<DeleteIcon />}
        onClick={() =>
          deleteStateItem({
            key: 'id', //
            setState: setTodoList,
            value: item.id,
          })
        }
      />
    </HStack>
  );
};

export default TodoItem;
