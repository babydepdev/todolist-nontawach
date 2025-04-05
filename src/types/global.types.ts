export interface Todo {
  text: string;
  checked: boolean;
  editing: boolean;
}

export interface CardListProps {
  item: Todo;
  index: number;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}

export interface FormAddToDoProps {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}
