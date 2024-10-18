import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = [
  { id: 1, done: false, text: 'learn react' },
  { id: 2, done: false, text: 'learn node' },
];

// Create a slice for todos  (contient les actions et le reducer)
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state = initialState, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state = initialState, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    doneTodo: (state =initialState, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    editTodo: (state = initialState, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      } 
    },
  },
});

// Export actions
export const { addTodo, deleteTodo, doneTodo, editTodo } = todosSlice.actions;

// Create the Redux store
export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});
