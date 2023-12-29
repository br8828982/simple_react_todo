import { useState, ChangeEvent, KeyboardEvent } from "react";

interface FormProps {
  onAddTodo: (newTodo: string) => void;
}

function Form({ onAddTodo }: FormProps) {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    onAddTodo(newTodo);
    setNewTodo("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (newTodo.trim() === "") return;
    if (e.key === "Enter") {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleAddTodo}>
        Add
      </button>
    </>
  );
}

export default Form;
