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


## What Now?

Ah, you’ll have to wait for the next exciting installment dear coder.

Thank you for reading thus far.

Happy coding and creating! 🌟🎉

\#GatsbyJS #TypeScript #ReactJS #Recoil #ChakraUI #TodoApp #FrontendDev #WebDev #CodingTips

<p/>

<span style="font-size:10px">
Photo by <a href="https://unsplash.com/@thomasbormans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thomas Bormans</a> on <a href="https://unsplash.com/photos/pcpsVsyFp_s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</span>
