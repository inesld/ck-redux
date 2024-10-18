import React from 'react';
import { Button } from 'react-bootstrap';
import Edit from './Edit';

import { useDispatch } from 'react-redux'; // Import useDispatch
import { deleteTodo, doneTodo, editTodo } from '../redux/store'; // Import actions from the Redux store

const Todo = ({ todo }) => {
  const dispatch = useDispatch(); // Initialize dispatch
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "50%",
      margin: "20px auto",
      padding: "15px",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    }}>
      <p style={{
        margin: 0,
        flex: 1,
        fontSize: "18px",
        color: "#333",
        textDecoration: todo.done ? 'line-through' : null
      }}>
        {todo.text}
      </p>

      <div style={{ display: "flex", gap: "10px" }}>
        <Button variant="danger" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
        <Button variant="success" onClick={() => dispatch(doneTodo(todo.id))}>Done</Button>
        <Edit todo={todo} editTodo={(newText) => dispatch(editTodo({ id: todo.id, text: newText }))} />
      </div>
    </div>
  );
};

export default Todo;