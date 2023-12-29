import { useState } from "react";
import Form from "./Form";
import List from "./List";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const initialTodos: Todo[] = [
  { id: 1703844525235, text: "Hi", done: false },
  { id: 1703844541705, text: "Hello", done: true },
];

function Todo() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleAddTodo = (newTodoText: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        text: newTodoText,
        done: false,
      },
    ]);
  };

  const handleToggleTodo = (todoId: number, isDone: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, done: isDone } : todo
      )
    );
  };

  const handleDeleteTodo = (todoId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const handleEditTodo = (todoId: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <>
      <Form onAddTodo={handleAddTodo} />
      <List
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </>
  );
}

export default Todo;
