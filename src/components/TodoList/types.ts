import React from "react";
import { Todo } from "../../App";

export type TodoListProps = {
  header: {
    className: string;
    text: string;
  };
  unorderedList: {
    className: string;
  };
  listItem: {
    todos: Todo[];
    buttonText: string;
    buttonClass: string;
    toggleTodo: (id: string | null, completed: boolean) => void;
    onDeleteTodo: (todo: Todo) => void;
  };
};
