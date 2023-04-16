import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTodo, doneTodo } from '../Redux/Actions/TodoActions'
import EditTodo from './EditTodo';

function Todo({ todo }) {
  const dispatch = useDispatch() ;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      margin: 'auto',
      width: '50%',
      paddingTop: '10' ,
    }}>

      <p style={{textDecoration : todo.done ? 'line-through' : null}}>{todo.text}</p>
      <Button variant='danger' onClick={() => dispatch(deleteTodo(todo.id))}>delete</Button>
      <EditTodo todo ={todo}/>
      <Button variant='success' onClick={()=>dispatch(doneTodo(todo.id))}>done</Button>
    </div>
  )
}

export default Todo