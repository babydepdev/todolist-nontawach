import { Todo } from "../App";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";

const CardList = ({ item, index, setTodos, todos }: any) => {
  const handleCheckTodo = (index: number) => {
    setTodos(
      todos.map((item: Todo, i: number) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleDeleteTodo = (index: number) => {
    setTodos(todos.filter((_: any, i: number) => i !== index));
  };

  const handleEditTodo = (index: number) => {
    setTodos(
      todos.map((todo: Todo, i: number) =>
        i === index ? { ...todo, editing: !todo.editing } : todo
      )
    );
  };

  const handleChangeEditTodo = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTodos(
      todos.map((todo: Todo, i: number) =>
        i === index ? { ...todo, text: e.target.value } : todo
      )
    );
  };
  return (
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
  );
};
export default CardList;
