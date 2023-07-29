import React from "react";
import { TodoListProps } from "./types";
export const TodoList: React.FunctionComponent<TodoListProps> = ({
  header,
  unorderedList,
  listItem,
}: TodoListProps) => {
  return (
    <React.Fragment>
      <h1 className={header.className}>{header.text}</h1>
      <ul className={unorderedList.className}>
        {listItem.todos.length
          ? listItem.todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={(event) =>
                        listItem.toggleTodo(todo.id, event.target.checked)
                      }
                    />
                    {todo.title}
                  </label>
                  <button
                    className={listItem.buttonClass}
                    onClick={() => listItem.onDeleteTodo(todo)}
                  >
                    {listItem.buttonText}
                  </button>
                </li>
              );
            })
          : "Create a todo list"}
      </ul>
    </React.Fragment>
  );
};
