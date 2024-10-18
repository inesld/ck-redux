import React from 'react'
import Todo from './Todo'

import { useSelector, useDispatch } from 'react-redux'; // Import Redux hooks
import { deleteTodo, doneTodo, editTodo } from '../redux/store'; // Import actions from Redux store

const ListTodos = () => {
  const todos = useSelector((state) => state.todos); // Get todos from Redux store
  const dispatch = useDispatch(); // Initialize dispatch
  return (
    <div>
      {
        todos.map(todo =>
          (<Todo 
            todo={todo} 
            key={todo.id} 
            deleteTodo={()=>dispatch(deleteTodo(todo.id))}   // Dispatch delete action
            doneTodo={() => dispatch(doneTodo(todo.id))}   // Dispatch toggle done action
            editTodo={(newText) => dispatch(editTodo({ id: todo.id, text: newText }))} // Dispatch edit action
             />
          ))}
    </div>
  )
}

export default ListTodos