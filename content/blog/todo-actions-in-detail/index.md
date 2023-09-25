---
title: Building Out The Actions In Detail In A ToDo App
date: "2023-09-20T12:12:00Z"
categories:
  - tutorial
meta_keywords:
  - todo app tutorial, typescript, react, recoil, coding tutorial
meta_description: >-
  Building a Todo application is a logical way to delve into the world of modern web development. In this guide, we’ll introduce the concept of actions. Our powerful tech stack: #GatsbyJS, #TypeScript, #ReactJS, #Recoil, and #ChakraUI. Let’s dive in! 🚀
settings_include_in_fti: true
settings_featured_image:
  alt: >-
    todo app tutorial
  src: /thomas-bormans-pcpsVsyFp_s-unsplash.jpg
  title: Building Out The Actions In Detail In A ToDo App
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#typescript"
  - "#todoapptutorial"
---

## Introduction

Building a Todo application is a logical way to delve into the world of modern web development. In this guide, we’ll introduce the concept of actions. Our powerful tech stack: GatsbyJS, TypeScript, ReactJS, Recoil, and Chakra-UI.

<a href="https://beareact.dev/apps/to-do/" target="_blank">Click here to find out what you will be building.</a>

Now, Let’s dive in! 🚀

## A Quick Revision

In the last article we introduced the concept of performing actions. Specifically, these actions:

* Add
* Edit
* Delete
* Toggle completion

## Let’s Dive Right In

OK so you will need to have the following dependency installed:

uiid (yarn add uiid OR npm i uuid).

And you may want to read this article: <a href="https://beareact.dev/todo-let-us-look-at-the-recoil-state/" target="_blank">Let Us Look At The Recoil State</a>

uuid creates nice and unique ids. A unique id is important for tracking discreet pieces of data.

These actions will make a lot more sense in the context of the user interface and how they are consumed. But for now, just enjoy beauty of the raw code.

### src/content-apps/to-do/actions/create-item.ts

```typescript
import { v4 as uuidv4 } from 'uuid';
//  interfaces and types
import { TodoList } from '../state/interfaces-and-types';

type Payload = {
  setState: Function;
  value: string;
};

const createItem = (payload: Payload) => {
  const { setState, value } = payload;

  setState((prevState: TodoList) => [
    ...prevState,
    {
      id: uuidv4(),
      text: value,
      isComplete: false,
    },
  ]);
};

export default createItem;
```

**An explanation of create item**: When adding a ToDo list record or document or item (these definitions are interchangeable), you will need to assign a unique Id. You could use the index of the array - but the problem with this is - what if the array gets sorted and the item is moved? Array indexes are not safe.

The type definition has been defined previously, and you can review the document referenced above if you want.

This action will also need its own typed definition of what to expect in the Payload.

The payload requires the input value (the to do), and a function to set the state with the new item.

Because this ToDo app is using Recoil under the hood setState will work similarly to the React setState hook. Recoil will provide a previous state if we ask for it. I have called it prevState. But call it what you want. If you want.

The function automagically returns an array, the first values being whatever is in the oldToDoList splatted into the first array item space.

Next we create an object defining the new todo item we want. The object contains a unique id provided by uuid, the text of the todo item value itself, and whether or not the item is complete. By default no, it is not complete because we only just added this todo.

### src/content-apps/to-do/actions/delete-item.ts

```typescript
import removeItemAtIndex from './remove-item-at-index';
//  interfaces and types
import { TodoList } from '../state/interfaces-and-types';

type Payload = {
  index: string;
  setTodoList: Function;
  todoList: TodoList;
};

const deleteItem = (payload: Payload) => {
  const { index, setTodoList, todoList } = payload;
  const newList = removeItemAtIndex(todoList, index);

  setTodoList(newList);
};

export default deleteItem;
```

**An explanation of delete item**: So we need to delete shit we have completed or don’t want any more - at some point anyway.

The imports in this action are another function and a type.

Next we define the types expected in the Payload passed into this function. The index is a string because uiid value is a complex string value.

The bits coming from the payload get sent to a child function - removeItemAtIndex and a new list is returned. The child function accepts the todoList and the index. The function removeItemAtIndex is discussed in more detail further below.

Once the newList is arrived at byt he removeItemAtIndex function, the new list is set by the setToDoList function which will replace the recoil state.

### src/content-apps/to-do/actions/edit-item-text.ts

```typescript
import replaceItemAtIndex from './replace-item-at-index';
//  interfaces and types
import { TodoItem, TodoList } from '../state/interfaces-and-types';

type Payload = {
  index: string;
  item: TodoItem;
  setTodoList: Function;
  todoList: TodoList;
  value: string;
};

const editItemText = (payload: Payload) => {
  const { index, item, setTodoList, todoList, value } = payload;
  const newList = replaceItemAtIndex(todoList, index, {
    ...item,
    text: value,
  });

  setTodoList(newList);
};

export default editItemText;
```

**An explanation of edit item**: Ah so what if we need to change an item record - how do we do this? In a simple to do all we need to do is change one value - and that is the text of the todo.

This action imports a replaceItemAtIndex function and some types. The replaceItemAtIndex function is described further below.

The first thing defined in this function is the expected types in the Payload passed to the editItemText function. The index and the value are the location in the array to make the change at (the id of the record to update), and, the actual value to change. If our app was more complicated the value might be an object maybe rather than a primitive string.

The replaceItemAtIndex accepts three arguments it turns out. The array of todos (todoList), the index (which item in the array to find and change) and the actual updated item as a new object. The item is splatted out into an object, and the text value is included in that object, effectively replacing what was there.

Lastly the setTodoList function accepts the newList and replaces that in Recoil state.

### src/content-apps/to-do/actions/remove-item-at-index.ts

```typescript
//  interfaces and types
import { TodoItem } from '../state/interfaces-and-types';

const removeItemAtIndex = (arr: Array<TodoItem>, index: string) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export default removeItemAtIndex;
```

### src/content-apps/to-do/actions/replace-item-at-index.ts

```typescript
//  interfaces and types
import { TodoItem } from '../state/interfaces-and-types';

const replaceItemAtIndex = (
  arr: Array<TodoItem>,
  index: string,
  newValue: TodoItem,
) => [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];

export default replaceItemAtIndex;
```

**An explanation of replaceItemAtIndex function**: This is a helper function. In this case the function accepts multiple arguments and thus each individual argument is type defined, rather than a single Payload object containing expected keys and types. Which style do you prefer?

This function returns an array. The Array is sliced

### src/content-apps/to-do/actions/toggle-item-completion.ts

```typescript
import replaceItemAtIndex from './replace-item-at-index';
//  interfaces and types
import { TodoItem, TodoList } from '../state/interfaces-and-types';

type Payload = {
  index: string;
  item: TodoItem;
  setTodoList: Function;
  todoList: TodoList;
};

const toggleItemCompletion = (payload: Payload) => {
  const { index, item, setTodoList, todoList } = payload;

  const newList = replaceItemAtIndex(todoList, index, {
    ...item,
    isComplete: !item.isComplete,
  });

  setTodoList(newList);
};

export default toggleItemCompletion;
```

## What Now?

Ah, you’ll have to wait for the next exciting installment dear coder.

Thank you for reading thus far.

Happy coding and creating! 🌟🎉

\#GatsbyJS #TypeScript #ReactJS #Recoil #ChakraUI #TodoApp #FrontendDev #WebDev #CodingTips

<p/>

<span style="font-size:10px">
Photo by <a href="https://unsplash.com/@thomasbormans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thomas Bormans</a> on <a href="https://unsplash.com/photos/pcpsVsyFp_s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</span>
