
// STEP 1: Import configureStore from Redux Toolkit.
//
// configureStore() creates the Redux store.
// The store holds the application's global state.
//
// It also automatically configures useful Redux
// development tools and middleware.

import { configureStore } from "@reduxjs/toolkit";


// STEP 2: Import the todo reducer.
//
// todoReducer is the default export from todoSlice.js.
//
// The reducer describes how the todo state changes
// when actions such as addTodo, updateTodo, or
// removeTodo are dispatched.
//
// The reducer is responsible for updating the state;
// it does not directly handle button clicks.

import todoReducer from "../features/todo/todoSlice";


// STEP 3: Create and export the Redux store.
//
// configureStore() accepts a configuration object.
//
// The reducer property tells Redux which reducer
// should manage the application's state.
//
// Here, todoReducer manages the todo state.
//
// Because we pass the reducer directly, the state
// itself is the value managed by todoReducer.
//
// For your current slice, that state looks like:
// {
//   todos: [
//     { id: 1, text: "Hello world" }
//   ]
// }

export const store = configureStore({
  reducer: todoReducer,
});


// STEP 4: Export the store for use in main.jsx.
//
// main.jsx imports this store and provides it to
// the React application through the Redux Provider.
//
// This allows components to use useSelector()
// to read the state and useDispatch() to dispatch actions.
