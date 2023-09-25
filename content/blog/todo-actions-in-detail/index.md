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

uiid (yarn add uuid OR npm i uuid).

And you may want to read this article: <a href="https://beareact.dev/todo-let-us-look-at-the-recoil-state/" target="_blank">Let Us Look At The Recoil State</a>

uuid creates nice and unique ids. A unique id is important for tracking discreet pieces of data.

These actions will make a lot more sense in the context of the user interface and how they are consumed. But for now, just enjoy beauty of the raw code.

### src/content-apps/to-do/actions/create-item.ts

```typescript
import { v4 as uuidv4 } from 'uuid';

type Payload = {
  value: string;
};

const createItem = (payload: Payload) => {
  const { value } = payload;

  const todo = {
    id: uuidv4(),
    isComplete: false,
    text: value,
  };

  return todo;
};

export default createItem;
```

**An explanation of create item**: When adding a ToDo list record or document or item (these definitions are interchangeable but in your own documentation you should choose one to avoid confusion), you will need to assign a unique Id. You could use the index of the array - but the problem with this is - what if the array gets sorted and the item is moved? Array indexes are not safe.

This action expects a value with a string type to be included in the Payload.

The const todo is an object and it contains a unique id provided by uuid, the text of the todo item value itself, and whether or not the item is complete. By default no, it is not complete because we only just added this todo.

This function returns the todo object and does nothing else.

### src/content-apps/to-do/actions/create-state-item.ts

```typescript
//  interfaces and types
import { TodoItem, TodoList } from '../state/interfaces-and-types';

type Payload = {
  item: TodoItem;
  setState: Function;
};

const createStateItem = (payload: Payload) => {
  const { item, setState } = payload;

  setState((prevState: TodoList) => [...prevState, item]);
};

export default createStateItem;
```

**An explanation of create state item**: This function attempts to be nice and simple.

It has a type definition for Payload and it expects an item (defined as TodoItem) and setState (defined as a function).

The setState function is actually a Recoil function under the hood, and it works quite a bit like setState from React’s useState hook.

So we use setState to expose the previous state (and we are calling it prevState and typeing it as TodoList). The exposed anonymous function returns an updated array - which is whatever is inside the prevState array (the splat of prevState "...prevState"), and then the item itself is appended to this returned array.

### src/content-apps/to-do/actions/delete-state-item.ts

```typescript
//  interfaces and types
import { TodoList } from '../state/interfaces-and-types';

type Payload = {
  key: string;
  setState: Function;
  value: string;
};

const deleteStateItem = (payload: Payload) => {
  const { key, setState, value } = payload;

  setState((prevState: TodoList) => {
    const newState = prevState.filter((prevItem) => {
      const keyPrevItemValue = prevItem[key as keyof typeof prevItem];

      return keyPrevItemValue !== value;
    });

    return newState;
  });
};

export default deleteStateItem;
```

**An explanation of delete state item**: We need to be able to delete a todo from the application state. This function serves that purpose.

As usual we define what to expect in the payload. In this case we expect a key as as string, a function setState and a value, also a string.

We can use setState to expose the prevState (which is a TodoList type).

Within the anonymous function which has been exposed within setState, we define a const of newState which we want to be different to prevState (the argument magically delivered to the anonymous function).

The const newState is a filtered state - meaning we want to return a state that matches conditions.

Next, within the anonymous filter function which has been exposed, we define the key item value which we are looking for to delete. Each prevItem has a key value. In this case the key should have a value of 'id' which will have to be set in the feature that calls this function. But, this function has been designed to look for whatever is passed in and pass or fail based on its equality to value.

The idea is: if the id (key) is not equal to the (id) value we want to delete, then return the item to the newState. Otherwise do not return it, which effectively eliminates the item with the targeted id from the newState.

Finally, we return the newState to the setState function which will set the Recoil state.

### src/content-apps/to-do/actions/update-item.ts

```typescript
//  interfaces and types
import { TodoItem, TodoList } from '../state/interfaces-and-types';

type Payload = {
  item: TodoItem;
  key: string;
  value: any;
};

const updateItem = (payload: Payload) => {
  const { item, key, value } = payload;

  return {
    ...item,
    [key]: value,
  };
};

export default updateItem;
```

**An explanation of update item**: Here we have a function that updates an object by key. By defining a key and passing it in, we can modify any item in the object using bracket notation.

NOTE: in javascript, if an object does not contain whatever key is, a new key value pair is created with whatever key is as the key part. What we want to do is carefully use a key that exists in the item (for example, id, isComplete or text).

The update function returns the existing item splatted (...item) into a new object. The key is assigned with a value of value.

For example if key was 'text' and value was 'hello', the item would contain:

```javascript
{
  id,
  isComplete,
  text: 'hello',
}
```

For example if key was 'banana' and value was 'yellow', the item would contain:

```javascript
{
  banana: 'yellow',
  id,
  isComplete,
  text,
}
```

NOTE: in the examples above I am not giving values for id, isComplete and text in all cases because it does not matter relative to the purpose of the examples.

### src/content-apps/to-do/actions/update-state-item.ts

```typescript
//  interfaces and types
import { TodoItem, TodoList } from '../state/interfaces-and-types';

type Payload = {
  item: TodoItem;
  key: string;
  setState: Function;
};

const updateStateItem = (payload: Payload) => {
  const { item, key, setState } = payload;
  const keyItemValue = item[key as keyof typeof item];

  setState((prevState: TodoList) => {
    const newState = prevState.map((prevItem) => {
      const keyPrevItemValue = prevItem[key as keyof typeof prevItem];

      if (keyItemValue === keyPrevItemValue) {
        return { ...prevItem, ...item };
      }

      return prevItem;
    });

    return newState;
  });
};

export default updateStateItem;
```

**An explanation of update state item**: As usual I like to define what to expect in the Payload using a type definition. The updateStateItem expects an item, a key and a function.

Once we have destructured the payload by exposing its contents, we can then define the keyItemValue that we want to match inside the state array.

Next we call setState to expose an anonymous function that has the previous state (prevState) passed into it. The prevState argument is expected to be a TodoList type.

Then we want to create a newState constant using the map function which is an array property in JavaScript.

Within the anonymous function that is exposed by the map function, the items within the array are exposed as prevItem in this case (you can name this argument with nearly any way you like). Again we need to get the key item value (as keyPrevItemValue).

If the keyPrevItemValue is exactly equal to the keyItemValue then we want to return an updated array item. We do this by returning a new object that has the prevItem splatted in as the first item in the object, and then the item passed in to the updateStateItem function is splatted in as the second item in the object.

The beauty of this approach is that it does not matter what key value pairs have changed inside the object. JavaScript handles that for us using this method.

## What Now?

Ah, you’ll have to wait for the next exciting installment dear coder.

Thank you for reading thus far.

Happy coding and creating! 🌟🎉

\#GatsbyJS #TypeScript #ReactJS #Recoil #ChakraUI #TodoApp #FrontendDev #WebDev #CodingTips

<p/>

<span style="font-size:10px">
Photo by <a href="https://unsplash.com/@thomasbormans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thomas Bormans</a> on <a href="https://unsplash.com/photos/pcpsVsyFp_s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</span>
