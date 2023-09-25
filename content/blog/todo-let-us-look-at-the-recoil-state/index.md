---
title: Building a Todo Application State With Recoil and TypeScript
date: "2023-08-30T08:40:00Z"
categories:
  - tutorial
meta_keywords:
  - todo app tutorial, typescript, react, recoil, coding tutorial
meta_description: >-
  Building a Todo application is a logical way to delve into the world of modern web development. In this guide, we’ll focus on the necessary state files of your Todo app in the context of this powerful tech stack: GatsbyJS, TypeScript, ReactJS, Recoil, and Chakra-UI. Let’s dive in! 🤿
settings_include_in_fti: true
settings_featured_image:
  alt: >-
    todo app tutorial
  src: /thomas-bormans-pcpsVsyFp_s-unsplash.jpg
  title: Building a Todo Application State With Recoil and TypeScript
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#typescript"
  - "#todoapptutorial"
---

## Introduction

Building a Todo application is a logical way to delve into the world of modern web development. In this guide, we’ll focus on the necessary state files of your Todo app in the context of this powerful tech stack: GatsbyJS, TypeScript, ReactJS, Recoil, and Chakra-UI.

## File Location

You will need a folder to place your state files. That location will be **src/content-apps/to-do/state**.

Let’s begin with the recoil atoms that we will need.

### src/content-apps/to-do/state/atoms.ts

```typescript
import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'all',
});
```

This is all that is required to provide a set of atoms for our simple todo app. In the world of recoil, the key is used to uniquely identify the atom internally. So, make sure you make a unique key label ok?

The default is simply the default state. If you’re familiar with the **useState** hook, you'd write something like:

```javascript
  const [todoListState, setTodoListState] = useState([]);
  const [todoListFilterState, setTodoListFilterState] = useState('all');
```

But, we are using recoil. So, no need for **useState** hook.

## Derived State

Hmmm. We are going to need to filter our state a little based on user input. So we will need some tools to do that.

So, create the following file, and put this code in it:

### src/content-apps/to-do/state/derived.ts

```typescript
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
```

The **filteredTodoListState** function returns a state based on the value in the **todoListFilterState** atom.

The **todoListStatsState** function returns a set of values. Take your time and read what is going on here.

Next you are going to need interfaces and types. So, please create the following file:

### src/content-apps/to-do/state/interfaces-and-types.ts

```typescript
type TodoItem = {
  id: string;
  isComplete: boolean;
  text: string;
};

type TodoList = Array<TodoItem>;

export { TodoItem, TodoList };
```

The ToDoItem is a description of the completed todo item. It requires a unique id, whether or not the item is complete (which can be represented as a simple boolean) and the todo item description itself.

The ToDoList is a description of the default atom array needed (our database of todos).

Then we export them to use everywhere else they are needed.

Finally you will need to create an index file to tie all this stuff up in a neat boy. So now create this last file:

### src/content-apps/to-do/state/index.ts

```typescript
import { todoListState, todoListFilterState } from './atoms';
import { filteredTodoListState, todoListStatsState } from './derived';

export {
  filteredTodoListState,
  todoListFilterState,
  todoListState,
  todoListStatsState,
};
```

All that is going on here is we are importing items from the **atoms.ts** file and the **derived.ts** file. Then we export them again. Notice that we do not require the **interfaces-and-types.ts** file yet.

## So What Now?

It is time for a break dear coder. Well done you for getting to here.

Happy coding and creating! 🌟🎉

\#GatsbyJS #TypeScript #ReactJS #Recoil #ChakraUI #TodoApp #FrontendDev #WebDev #CodingTips

<p/>

<span style="font-size:10px">
Photo by <a href="https://unsplash.com/@thomasbormans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thomas Bormans</a> on <a href="https://unsplash.com/photos/pcpsVsyFp_s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</span>
