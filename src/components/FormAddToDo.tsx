import { FaPlus } from "react-icons/fa6";
const FormAddToDo = ({ newTodo, setTodos, setNewTodo, todos }: any) => {
  const handleChangeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleAddTodo = () => {
    if (newTodo === "") {
      alert("Please Enter Todo");
      return;
    }
    setTodos([{ text: newTodo, checked: false, editing: false }, ...todos]);
    setNewTodo("");
  };

  return (
    <form
      className="flex items-center relative w-[500px]"
      onSubmit={handleAddTodo}
    >
      <input
        className="border border-gray-300 px-4 py-2 pr-12 rounded-full w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
        type="text"
        value={newTodo}
        onChange={handleChangeNewTodo}
        placeholder="Add Todo..."
        autoFocus
      />
      <button
        className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-green-500 hover:bg-green-400 px-4 py-2 rounded-full text-white transition-all"
        type="submit"
      >
        <FaPlus />
      </button>
    </form>
  );
};
export default FormAddToDo;
