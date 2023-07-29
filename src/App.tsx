import React from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { TodoList } from "./components/TodoList/TodoList";
import { useState, useEffect } from "react";

export type Todo = {
  id: string | null;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localValue = localStorage.getItem("todos");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  const [newItem, setNewItem] = useState<Todo>({
    title: "",
    id: null,
    completed: false,
  } as Todo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: newItem.id, title: newItem.title, completed: false },
      ];
    });
    setNewItem({ title: "", id: null, completed: false });
  };

  const toggleTodo = (id: string | null, completed: boolean) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (toDelete: Todo) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== toDelete.id);
    });
  };

  return (
    <React.Fragment>
      <form className="new-item-form">
        <Input
          className="form-row"
          labelText="New Item"
          label_input_attribute="item"
          value={newItem.title}
          changeHandler={(event) => {
            const updated = event.target.value;
            setNewItem((prevNewItem) => ({
              ...prevNewItem,
              title: updated,
              id: crypto.randomUUID(),
            }));
          }}
        />
        <Button
          disabled={newItem.title === ""}
          className="btn"
          buttonText="Add"
          clickHandler={addNewTodo}
        />
      </form>
      <TodoList
        header={{ className: "header", text: "Todo List" }}
        unorderedList={{ className: "list" }}
        listItem={{
          todos: todos,
          buttonClass: "btn btn-danger",
          buttonText: "Delete",
          toggleTodo: toggleTodo,
          onDeleteTodo: deleteTodo,
        }}
      />
    </React.Fragment>
  );
}

export default App;
