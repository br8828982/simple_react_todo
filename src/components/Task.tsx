import React, { useState } from "react";
import { Todo } from "./Todo";

interface TaskProps {
  todo: Todo;
  onToggle: (todoId: number, isDone: boolean) => void;
  onDelete: (todoId: number) => void;
  onEdit: (todoId: number, newText: string) => void;
}

function Task({ todo, onToggle, onDelete, onEdit }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(todo.id, e.target.checked);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newText.trim() === "" || newText === todo.text) return;
    onEdit(todo.id, newText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewText(todo.text);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  return (
    <div>
      <input type="checkbox" checked={todo.done} onChange={handleToggle} />
      {isEditing ? (
        <>
          <input type="text" value={newText} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
