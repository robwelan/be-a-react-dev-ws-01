import { selector } from 'recoil';
import { todoListState, todoListFilterState } from './atoms';
//  interfaces and types
import { TodoList } from './interfaces-and-types';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState) as TodoList;

    switch (filter) {
      case 'complete':
        return list.filter((item) => item.isComplete);
      case 'incomplete':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState) as TodoList;
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    let allText = '';
    todoList
      .filter((item) => !item.isComplete)
      .map((item) => (allText = allText + ' ' + item.text));
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
      allText,
    };
  },
});
