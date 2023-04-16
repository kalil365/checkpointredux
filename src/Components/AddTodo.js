import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/Actions/TodoActions';

function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch()

  /* handleAdd */
  const handleAdd = (e) => {
    e.preventDefault()
    if (text) {
      dispatch(addTodo({ id: Math.random(), done: false, text }))
      setText('')
    }
    else {
      alert('please type your Todo')
    }
  }

  return (
    <div>
      <Form style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto', width: '50%', paddingTop: '10'
      }}
        onSubmit={handleAdd}>
        <FormControl type='text '
          placeholder='add text'
          value={text}
          onChange={(e) => setText(e.target.value)} />
        <Button variant='primary' type='submit' >add</Button>
      </Form>
    </div>
  )
}

export default AddTodo