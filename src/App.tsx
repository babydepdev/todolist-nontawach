import { useEffect, useState } from "react";
import { FaTrash, FaPenToSquare, FaPlus } from "react-icons/fa6";

interface Todo {
  text: string;
  checked: boolean;
  editing: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [newTodo, setNewTodo] = useState<string>("");

  const handleChangeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleCheckTodo = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleAddTodo = () => {
    if (newTodo === "") {
      alert("Please Enter Todo");
      return;
    }
    setTodos([{ text: newTodo, checked: false, editing: false }, ...todos]);
    setNewTodo("");
  };

  const handleDeleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEditTodo = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, editing: !todo.editing } : todo
      )
    );
  };

  const handleChangeEditTodo = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, text: e.target.value } : todo
      )
    );
  };
  console.log(todos);
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-2">To Do List</h1>
      <div className="flex items-center relative w-[500px]">
        <input
          className="border border-gray-300 px-4 py-2 pr-12 rounded-full w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
          type="text"
          value={newTodo}
          onChange={handleChangeNewTodo}
          placeholder="Add Todo..."
        />
        <button
          className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-green-500 hover:bg-green-400 px-4 py-2 rounded-full text-white transition-all"
          onClick={handleAddTodo}
        >
          <FaPlus />
        </button>
      </div>
      <div className="space-y-4 my-4 w-[500px] flex flex-col">
        {todos.map((item: Todo, index: number) => (
          <div
            className="flex justify-between space-x-2 bg-gray-100 p-2 rounded-2xl"
            key={`todo-${index}`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="border w-5 h-5 cursor-pointer"
                checked={item.checked}
                onChange={() => handleCheckTodo(index)}
              />
              <input
                className={` ${
                  item.editing === false ? "" : "border border-gray-300"
                } px-4 py-2 rounded-md ${item.checked ? "line-through" : ""}`}
                type="text"
                onChange={(e) => handleChangeEditTodo(index, e)}
                value={item.text}
                disabled={item.editing == false}
                autoFocus
              />
            </div>

            <div className="flex flex-row gap-2">
              {item.editing === true ? (
                <button
                  className="bg-green-400 hover:bg-green-300 px-4 py-2 rounded-md text-white cursor-pointer"
                  onClick={() => handleEditTodo(index)}
                >
                  Save
                </button>
              ) : (
                <>
                  {item.checked === false && (
                    <button
                      className="bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-md text-white cursor-pointer"
                      onClick={() => handleEditTodo(index)}
                    >
                      <FaPenToSquare />
                    </button>
                  )}

                  <button
                    className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md text-white cursor-pointer"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    <FaTrash />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
