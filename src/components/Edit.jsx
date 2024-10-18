import { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useDispatch } from 'react-redux'; // Import useDispatch
import { editTodo } from '../redux/store'; // Import action from the Redux store

function Edit({todo}) {
  const dispatch = useDispatch(); // Initialize dispatch
  const [show, setShow] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormControl  
            type='text' 
            value={text} 
            onChange={e=>setText(e.target.value)}
            />
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
              dispatch(editTodo({ id: todo.id, text })); // Dispatch editTodo action
              handleClose();
            }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;










