type TodoItem = {
  id: string;
  isComplete: boolean;
  text: string;
};

type TodoList = Array<TodoItem>;

export { TodoItem, TodoList };
