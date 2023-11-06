---
title: Building the Todo View Components with TypeScript, ReactJS, Recoil, and Chakra-UI
date: "2023-10-24T09:00:00Z"
categories:
  - tutorial
meta_keywords:
  - todo app tutorial, typescript, react, recoil, coding tutorial
meta_description: >-
  Building a Todo application is a logical way to delve into the world of modern web development. In this guide, we’ll focus on view components required by this Todo app while exploring how to construct it using a powerful tech stack: #GatsbyJS, #TypeScript, #ReactJS, #Recoil, and #ChakraUI. Let’s dive in! 🤿
settings_include_in_fti: true
settings_featured_image:
  alt: >-
    todo app tutorial
  src: /thomas-bormans-pcpsVsyFp_s-unsplash.jpg
  title: Building the Todo View Components with TypeScript, ReactJS, Recoil, and Chakra-UI
settings_publish: true
twitter_tags:
  - "#beareactdev"
  - "#typescript"
  - "#todoapptutorial"
---

## Introduction

Building a Todo application is a logical way to delve into the world of modern web development. Now we’ll look at building out the view components of the Todo app, exploring how to construct it using a powerful tech stack: GatsbyJS, TypeScript, ReactJS, Recoil, and Chakra-UI.

<a href="https://beareact.dev/apps/to-do/" target="_blank">Click here to find out what you will be building.</a>

Now, let’s dive in! 🤿

## A Quick Recap

In the last article we built out our required actions:

* Add
* Edit
* Delete
* Toggle completion

We need these actions in order to add and modify and delete our items in our todo list.

What we need to do now is build out the user interface - or the view that the user interacts with. This view component will create a logical way of interacting with our todo data and will include controls like Buttons and Inputs and Check Boxes which will help manage our todo data.

You might want to revisit this page for a recap:
<a href="https://beareact.dev/todo-actions-in-detail/" target="_blank">Building Out The Actions In Detail In A ToDo App</a>.

And you might want to revisit this page for a recap: <a href="https://beareact.dev/todo-let-us-look-at-the-recoil-state/" target="_blank">Building a Todo Application State With Recoil and TypeScript</a>.

## Building the User Interface (the view components)

Because this is a fairly simple app, it turns out we do not need a particularly complex set of components. That’s nice.

Let’s start with the basic container component.

### src/content-apps/to-do/components/basic-container.tsx

```typescript
import React, { PropsWithChildren } from 'react';
//  chakra-ui
import { Box } from '@chakra-ui/react';

type Props = {
  marginTop: string;
};

const BasicContainer = (props: PropsWithChildren<Props>) => {
  const { children, marginTop = '' } = props;

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      marginTop={marginTop}
      overflow="hidden"
      p={4}
    >
      {children}
    </Box>
  );
};

export default BasicContainer;
```

**An explanation of BasicContainer**: This is a functional component which accepts props. Props expected are children and marginTop. PropsWithChildren is an extendable typing provided by React, and we add our component type definition to that.

This component or feature returns a Box (from Chakra-UI, which is in fact a div when rendered). The Box has specific properties, and only the marginTop can be customized. The Box is a container for whatever is provided as children.

### src/content-apps/to-do/components/basic-input.tsx

```typescript
import React from 'react';
//  chakra-ui
import { Input } from '@chakra-ui/react';

type Props = {
  handleOnChange: Function;
  placeholder: string;
  value: string;
};

const BasicInput = (props: Props) => {
  const { handleOnChange, placeholder, value } = props;

  return (
    <Input
      onChange={(event) => {
        handleOnChange(event);
      }}
      placeholder={placeholder}
      type="text"
      value={value}
      variant="outline"
    />
  );
};

export default BasicInput;
```

**An explanation of BasicInput**: An input is a browser control that allows an end-user to enter and edit data. This component renders a single Input from Chakra-UI. It expects three props which are typed out in Props.

The handleOnChange function is tied into the Input’s onChange function. Because the onChange provides an event prop, we are passing that prop into the handleOnChange function. This gives us versatility at the handleOnChange end, but it also passes in a whole bunch of otherwise useless options.

The Input is controlled, and so has a value of {value} (a prop passed into this component). We also tell this Input how to behave by giving it a type of text and a variant of outline.

### src/content-apps/to-do/components/to-do-item-creator.tsx

```typescript
import React, { useState } from 'react';
//  chakra-ui
import { Button, HStack } from '@chakra-ui/react';
//  recoil
import { useSetRecoilState } from 'recoil';
//  actions
import createItem from '../actions/create-item';
import createStateItem from '../actions/create-state-item';
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
          const item = createItem({ value: inputValue });
          createStateItem({ item, setState: setTodoList });
          setInputValue('');
        }}
      >
        Create
      </Button>
      <BasicInput
        handleOnChange={(event: EventPayload) => onChange(event)}
        placeholder="ENTER something to do"
        value={inputValue}
      />
    </HStack>
  );
};

export default TodoItemCreator;
```

**An explanation of TodoItemCreator**: Now we are getting into more complex components.

From React we will also grab the useState hook.

From Chakra-UI we grab Button and HStack (a horizontal stack).

From recoil we need the useSetRecoilState hook, because we want to directly set our recoil state.

We also want to import some of our actions we have prepared earlier. We need createItem and createStateItem actions. The createItem creates the basic todo document (or record if you want to call it that). The createStateItem inserts the item into the recoil state. It might make sense that we need to do these actions because we have named this component TodoItemCreator.

We will also need a local component, which is our BasicInput.

And finally, we will import our todoListState to use with recoil.

We also need to define a type for EventPayload which defines target? as an object and value? as a string. The question marks indicate that each item is optional. That is, these types may not exist inside the event payload. But when they do, they will be an object (in the case of target) and a string (in the case of value).

Inside the TodoItemCreator the first thing that is happening is that the state of the input is defined, using React’s useState hook.

Next we will get the setter function for the recoil state (todoListState) and call it setTodoList. This will allow us to set the recoil state. setTodoList is the recoil equivalent of the setInputValue from the useState hook we previously defined.

Next we define the onChange action for this input and the payload is typed from the EventPayload type. Inside the onChange function is where the target and value is provided default values. The setInputValue is provided to the useState hook.

Now we can return our view.

Inside the return, we wrap our components with the HStack from Chakra-UI and give it a width of 100%.

Then we render a Button with an onClick which creates an item using the createItem action using the inputValue from useState.

When item is returned, the onClick will then progress to the createStateItem function which will accept our item and a setState function, being the recoil setter which is setTodoList.

The final action of onClick is to set the input back to an empty string, since this item is now inserted into the recoil state.

Oh yeah, the Button label is "Create" in this case.

The next item rendered is the BasicInput which accept three properties, which you might remember from the above BasicInput component. One is the handleOnChange function which we need to define. It is a function that accepts and event and passes the event to onChange which we discussed above.

The placeholder is a string which will be used to provide a guide to the end-user in the Input feature placeholder property.

And finally, the value of the input will be provided from the useState hook which is inputValue.

### src/content-apps/to-do/components/to-do-item.tsx

```typescript
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
```

**An explanation of TodoItem**: This is another fairly complicated component. It also requires a few actions. It is similar to the ToItemCreator but it has some key differences.

We do not need useState from React.

We need Checkbox, HStack and IconButton from Chakra-UI.

We also need DeleteIcon from Chakra-UI Icons.

Next we need our actions, which are deleteStateItem, updateItem and updateStateItem.

And we will need our BasicInput component, useSetRecoilState from Recoil, a TodoItem type from our Recoil state type definitions and the todoListState from our state.

Our EventPayload is exactly the same as was required in the TodoItemCreator component which does flag it for moving to an external file for re-use and importing from that file to these two components.

The props of this component expect one argument, and that is it expects an item. In this case a ToDo item document (or record if you prefer).

Inside the TodoItem function we first pass props which is typed by Props.

And from props we then destructure props and expose the item property.

Next we create setTodoList which is the state setter for the Recoil todoListState state.

Then we define an onChange function which accepts an event (typed by EventPayload). This function provides default values for the event and target and value arguments (in case they are missing from the event prop).

The onChange then creates an updated item from the existing item using the updateItem function. In this case we want to update the 'text' key within the object using the updated value passed into this function.

Once the udpatedItem is defined, it is then passed into the updateStateItem function. The updatedItem is set to the item argument, the key is set as 'id'. This tells the function which item in the array to filter by. The 'id' should be unique in the ToDo array of items. And we want to pass in the Recoil setTodoList state setter by assigning it to the setState argument.

Next we return our output from this function.

The first piece is the wrapper which is an HStack from Chakra-UI - a div which forces it’s children to be aligned horizontally.

Inside the HStack we add a BasicInput. It is given the same props as in the to-do-item-creator.tsx file.

Next we add a Checkbox from Chakra-UI. It uses props from the item passed into the TodoItem component plus does some other nifty things. The onChange event of the Checkbox passes in whatever the opposite of the isComplete value in item. It will then pass the updated item into the Recoil state.

The onChange of the Checkbox is similar to the onChange fo the TodoItem function. It would be possible to create a re-useable function to manage both and simply pass in the correct key and the updated item. And I would have if there was more repetition in this function.

The last child of the HStack is an IconButton which uses the icon imported from Chakra-UI Icons. It’s onClick feature is assigned to the deleteStateItem action. The deleteStateItem’s arguments are set to enable the delete function to delete the correct item from the Recoil state.

### src/content-apps/to-do/components/to-do-list-filters.tsx

```typescript
import React from 'react';
//  chakra-ui
import { HStack, Select, Text } from '@chakra-ui/react';
//  recoil
import { useRecoilState } from 'recoil';
//  state
import { todoListFilterState } from '../state';

type EventPayload = {
  target?: {
    value?: string;
  };
};

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (payload: EventPayload) => {
    const { target = {} } = payload;
    const { value = '' } = target;

    setFilter(value);
  };

  return (
    <HStack>
      <Text>Filter:</Text>
      <Select onChange={updateFilter} value={filter} width="8em">
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </Select>
    </HStack>
  );
}

export default TodoListFilters;
```

**An explanation of TodoListFilters**: This component requires the HStack, Select and Text components of Chakra-UI.

It also needs useRecoilState from Recoil.

And it needs the todoListFilterState from the ToDo app’s state.

Then we need to define an EventPayload type. Oh, look at that, another EventPayload type exactly the same as two others. How would you go about creating a type definition file that defines this type once and is made available to the components that need it?

The TodoListFilters function requires no props. But it does need a filter and setFilter from the Recoil todoListFilterState state.

Next we define a fairly simple function called updateFilter. This function requires the payload typed by EventPayload.

The updateFilter simply accepts a value and this value updates the Recoil state.

The TodoListFilters function then returns the Chakra-UI components required to render in the browser.

This starts with an HStack which first renders the Text "Filter:".

The next child is the Select component. This component accepts the updateFilter function to the onChange prop and filter to the value prop. A width is also defined.

The Select has children which are the available options for the Select component.

Basically this function creates a control whereby the end user can choose to show all ToDos, complete ToDos or incomplete ToDos.

### src/content-apps/to-do/components/to-do-list-statistics.tsx

```typescript
import React from 'react';
//  chakra-ui
import {
  Center,
  Heading,
  SimpleGrid,
  Tag,
  TagLeftIcon,
  TagLabel,
  useColorModeValue,
} from '@chakra-ui/react';
//  react-icons
import { BiTask } from '@react-icons/all-files/bi/BiTask';
import { BsListTask } from '@react-icons/all-files/bs/BsListTask';
import { BiTaskX } from '@react-icons/all-files/bi/BiTaskX';
import { TbFilePercent } from 'react-icons/tb';
//  recoil
import { useRecoilValue } from 'recoil';
//  local components
import BasicContainer from './basic-container';
//  state
import { todoListStatsState } from '../state';

const TodoListStatistics = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
    allText,
  } = useRecoilValue(todoListStatsState);
  const colorAll = useColorModeValue('black.900', 'black.100');
  const colorComplete = useColorModeValue('green.500', 'green.200');
  const colorIncomplete = useColorModeValue('red.500', 'red.200');

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <>
      <BasicContainer marginTop="">
        <Heading as="h6" fontSize="105%">
          Statistics:
        </Heading>
        <SimpleGrid columns={[1, null, 4]} gap={2} marginTop="0.5em">
          <Center>
            <Tag color={colorAll} size="sm" variant="outline">
              <TagLeftIcon boxSize="12px" as={BsListTask} />
              <TagLabel>Total items: {totalNum}</TagLabel>
            </Tag>
          </Center>
          <Center>
            <Tag color={colorComplete} size="sm" variant="outline">
              <TagLeftIcon boxSize="12px" as={BiTask} />
              <TagLabel>Items complete: {totalCompletedNum}</TagLabel>
            </Tag>
          </Center>
          <Center>
            <Tag color={colorIncomplete} size="sm" variant="outline">
              <TagLeftIcon boxSize="12px" as={BiTaskX} />
              <TagLabel>Items incomplete: {totalUncompletedNum}</TagLabel>
            </Tag>
          </Center>
          <Center>
            <Tag color={colorAll} size="sm" variant="outline">
              <TagLeftIcon boxSize="12px" as={TbFilePercent} />
              <TagLabel>
                Percent complete: {formattedPercentCompleted}%
              </TagLabel>
            </Tag>
          </Center>
        </SimpleGrid>
      </BasicContainer>
    </>
  );
};

export default TodoListStatistics;
```

**An explanation of TodoListStatistics**: This component is suprisingly complex - at least in appearance.

But really all that is going in is that it imports a few components and a hook from Chakra-UI, a few icons from React Icons, useRecoilValue from Recoil, the BasicContainer component and the todoListStatsState Recoil state.

The TodoListStatistics component accepts no props. Nice. But it does render state. But these are in Recoil.

First we destructure totalNum, totalCompletedNum, totalUncompletedNum and percentCompleted from the todoListStatsState using the useRecoilValue Recoil hook.

We will be providing these values to the user in the browser.

Next we define the color values for the display of these numbers - and the color is dependant on the color mode value and that is controlled by the useColorModeValue hook.

Finally we do some basic maths using round from Math from JavaScript.

The output is fairly straightforward by now I trust.

The SimpleGrid renders either 1 or 4 columns depending on the viewport size. This is a feature of the SimpleGrid.

The Center component simply takes up the entire width of whatever contains it - and centers whatever is within it.

Each Center component has a Tag component as its child. Each Tag describes a statistic grabbed from the Recoil state and is colored by the relevant color provided by the relevant useColorModeValue hook value.

### src/content-apps/to-do/components/to-do-list.tsx

```typescript
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
```

**An explanation of TodoList**: This is the last component required to render our app. Neat.

First we need Flex, Heading and the useBreakpointValue hook from Chakra-UI and useRecoilValue hook from Recoil.

Next we'll need our local components (BasicContainer, TodoListStatistics, TodoListFilters, TodoItemCreator and TodoItem).

And filteredTodoListState from the state.

Inside the TodoList function we will get our ToDo list from the filteredTodoListState Recoil state and call it todoList.

And we will create flexBreak value using the useBreakpointValue hook. What it does is decide whether to wrap or not the content of the Flex Chakra-UI component.

The function first returns the shorthand version of React.Fragment.

The first child is the TodoListStatistics component.

The next child is the BasicContainer component. This component contains the Flex component, and it contains the TodoItemCreator and TodoListFilters components.

The next section is interesting. We are conditionally rendering the next items based on whether or not there is data in the todoList.

If there is data in the todoList, then we render out a BasicContainer. Inside that component is a Heading with a child of "List:"

Underneath the Heading child is the mapped todoList array. Each item in the todoList array returns a todoItem value mapped into TodoItem component. The TodoItem has a key defined as todoItem.id, and a key is required by React when you use the map feature. This helps React manage the contents of the array safely.

### src/content-apps/to-do/index.tsx

```typescript
import React from 'react';
//  local components
import TodoList from './components/to-do-list';

const ContentRecoilToDo = () => {
  return <TodoList />;
};

export default ContentRecoilToDo;
```

**An explanation of ContentRecoilToDo**: This is the root file of the ToDo app.

It imports the TodoList from the components and returns that component.


## What Now?

Well, that concludes this tutorial of how to use Recoil to build a ToDo app.

Thank you so much for reading.

You’ll have to wait for the next exciting tutorial dear coder. I am thinking about what tutorial to write at the moment.

Happy coding and creating! 🌟🎉

\#GatsbyJS #TypeScript #ReactJS #Recoil #ChakraUI #TodoApp #FrontendDev #WebDev #CodingTips

<p/>

<span style="font-size:10px">
Photo by <a href="https://unsplash.com/@thomasbormans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thomas Bormans</a> on <a href="https://unsplash.com/photos/pcpsVsyFp_s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</span>
