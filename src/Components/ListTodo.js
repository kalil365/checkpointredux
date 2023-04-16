import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo';

function ListTodo() {
  const todos = useSelector((state) => state.todoReducers.todos);

  return (
    <div>
      {
        todos.map((todo) => (<Todo todo={todo} key={todo.id} />))
      }
    </div>);
}

export default ListTodo;