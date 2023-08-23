import React from 'react';
//  chakra-ui
import { Flex, Heading } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import BasicContainer from './basic-container';
import TodoListStatistics from './to-do-list-statistics';
import TodoListFilters from './to-do-list-filters';
import TodoItemCreator from './to-do-item-creator';
import TodoItem from './to-do-item';
//  state
import { filteredTodoListState } from '../state';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStatistics />
      <BasicContainer marginTop="0.5em">
        <Flex gap={4}>
          <TodoItemCreator />
          <TodoListFilters />
        </Flex>
      </BasicContainer>
      {todoList && todoList.length > 0 && (
        <BasicContainer marginTop="0.5em">
          <Heading as="h6">List:</Heading>
          {todoList.map((todoItem) => (
            <TodoItem item={todoItem} key={todoItem.id} />
          ))}
        </BasicContainer>
      )}
    </>
  );
};

export default TodoList;
