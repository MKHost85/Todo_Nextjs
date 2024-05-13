"use client";
import React, { useState } from "react";
import Todo from "@/components/Todo/Todo";

import { useTodoContext } from "@/context/todo";

export default function TodoList() {
  const { state, dispatch } = useTodoContext();

  const handleOnChangeEdit = (todo) => {
    console.log(todo);
    dispatch({
      type: "EDIT",
      todos: todo
    });
  };

  const handleOnDeleteTodo = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const todolist = state.todos.map((todo) => (
    
      <li
        key={todo.id}
        className="flex flex-col md:flex-row justify-between pt-[10px]">
        <Todo todo={todo} handleOnChangeEdit={handleOnChangeEdit} handleOnDeleteTodo={handleOnDeleteTodo} />
      </li>
  ))
  return (
    <>
      <ul className="text-[#4c4a4a] flex flex-col gap-y-[30px] divide-y divide-gray-400">
        {todolist}
      </ul>
    </>
  );
}
