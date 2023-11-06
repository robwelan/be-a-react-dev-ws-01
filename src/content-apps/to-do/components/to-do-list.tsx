import React from 'react';
//  chakra-ui
import {BoxProps, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
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

/*
    Out of interest, the type and interface in <FlexWrap> assigned
    to useBreakpointValue has been suggested by ChatGPT.
    It seems to work.
*/

type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

interface MyFlexProps extends BoxProps {
  wrap?: FlexWrap;
}

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  const flexBreak = useBreakpointValue<FlexWrap>(
    {
      base: 'wrap',
      md: 'nowrap',
    },
    {
      fallback: 'md',
    },
  );

  return (
    <>
      <TodoListStatistics />
      <BasicContainer marginTop="0.5em">
        <Flex gap={4} wrap={flexBreak}>
          <TodoItemCreator />
          <TodoListFilters />
        </Flex>
      </BasicContainer>
      {todoList && todoList.length > 0 && (
        <BasicContainer marginTop="0.5em">
          <Heading as="h6" fontSize="105%">
            List:
          </Heading>
          {todoList.map((todoItem) => (
            <TodoItem item={todoItem} key={todoItem.id} />
          ))}
        </BasicContainer>
      )}
    </>
  );
};

export default TodoList;
