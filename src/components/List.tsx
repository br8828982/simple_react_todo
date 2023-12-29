import Task from "./Task";
import { Todo } from "./Todo";

interface ListProps {
  todos: Todo[];
  onToggleTodo: (todoId: number, isDone: boolean) => void;
  onDeleteTodo: (todoId: number) => void;
  onEditTodo: (todoId: number, newText: string) => void;
}

function List({ todos, onDeleteTodo, onToggleTodo, onEditTodo }: ListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
            onEdit={onEditTodo}
          />
        </li>
      ))}
    </ul>
  );
}

export default List;
