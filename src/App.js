import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import ListTodos from './components/ListTodos';

import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
 
  return (
      <Provider store={store}>
        <div className="App">
          <AddTodo />
          <ListTodos />
        </div>
      </Provider>
    );
}

export default App;
