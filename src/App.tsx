import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/localStorageUtil";
import FormAddToDo from "./components/FormAddToDo";
import CardList from "./components/CardList";

export interface Todo {
  text: string;
  checked: boolean;
  editing: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = getLocalStorage<Todo[]>("todos", []);
    return storedTodos;
  });
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    setLocalStorage("todos", todos);
  }, [todos]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-2">To Do List</h1>
      <FormAddToDo
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        setTodos={setTodos}
        todos={todos}
      />
      <div className="space-y-4 my-4 w-[500px] flex flex-col">
        {todos.map((item: Todo, index: number) => (
          <CardList
            item={item}
            index={index}
            setTodos={setTodos}
            todos={todos}
            key={`todo-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
