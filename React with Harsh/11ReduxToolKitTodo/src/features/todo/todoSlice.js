
// STEP 1: Import the required functions from Redux Toolkit.
//
// createSlice:
// Creates a Redux slice containing the slice name,
// initial state, reducers, and automatically generated actions.
//
// nanoid:
// Generates a unique ID for every new todo.

import { createSlice, nanoid } from "@reduxjs/toolkit";


// STEP 2: Create the initial state.
//
// This is the starting data stored in Redux.
//
// initialState is an object containing a property called todos.
// todos is an array that stores all todo objects.
//
// Each todo has:
// id   -> uniquely identifies the todo.
// text -> stores the todo's description.

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello world",
    },
  ],
};


// STEP 3: Create the todo slice.
//
// createSlice() accepts three important properties:
//
// name:
// Identifies this slice. Here, the name is "todo".
//
// initialState:
// Defines the initial data for the slice.
//
// reducers:
// Contains the functions that describe how the state changes.
//
// Redux Toolkit automatically creates action creators
// for the reducers defined below.

export const todoSlice = createSlice({
  name: "todo",

  initialState,

  reducers: {

    // STEP 4: ADD A TODO
    //
    // This reducer runs when addTodo() is dispatched.
    //
    // state:
    // The current Redux state for this slice.
    //
    // action:
    // Contains information sent with the action.
    //
    // action.payload:
    // Contains the text passed to addTodo().
    //
    // Example:
    // dispatch(addTodo("Learn React"))
    //
    // action.payload = "Learn React"

    addTodo: (state, action) => {

      // Create a new todo object.
      const todo = {

        // Generate a unique ID for this todo.
        id: nanoid(),

        // Store the text received from the action payload.
        text: action.payload,
      };

      // Add the new todo object to the todos array.
      //
      // Redux Toolkit uses Immer internally, so this
      // push operation safely updates the Redux state.
      state.todos.push(todo);
    },


    // STEP 5: REMOVE A TODO
    //
    // This reducer runs when removeTodo() is dispatched.
    //
    // Example:
    // dispatch(removeTodo("abc123"))
    //
    // action.payload = "abc123"
    //
    // The payload contains the ID of the todo to remove.

    removeTodo: (state, action) => {

      // filter() creates a new array containing only
      // todos whose IDs do not match action.payload.
      //
      // todo.id !== action.payload means:
      // Keep this todo if its ID is different.
      //
      // The todo with the matching ID is excluded.
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },


    // STEP 6: UPDATE AN EXISTING TODO
    //
    // This reducer runs when updateTodo() is dispatched.
    //
    // Example:
    // dispatch(
    //   updateTodo({
    //     id: "abc123",
    //     text: "Learn Redux Toolkit"
    //   })
    // )
    //
    // action.payload contains:
    // {
    //   id: "abc123",
    //   text: "Learn Redux Toolkit"
    // }

    updateTodo: (state, action) => {

      // map() checks every todo in the array and
      // creates the updated array.

      state.todos = state.todos.map((todo) =>

        // Check whether the current todo's ID matches
        // the ID supplied in action.payload.
        todo.id === action.payload.id

          // If IDs match:
          // Copy the existing todo object using ...
          // and replace its text with the new text.
          ? {
              ...todo,
              text: action.payload.text,
            }

          // If IDs do not match:
          // Keep the original todo unchanged.
          : todo
      );
    },

  },
});


// STEP 7: EXPORT ACTION CREATORS.
//
// createSlice() automatically creates these action creators
// from the reducer names above.
//
// addTodo(text) creates an action for adding a todo.
// updateTodo({ id, text }) creates an action for editing.
// removeTodo(id) creates an action for deleting.
//
// Components import these functions and dispatch their actions.

export const {
  addTodo,
  updateTodo,
  removeTodo,
} = todoSlice.actions;


// STEP 8: EXPORT THE REDUCER.
//
// The Redux store imports this reducer to manage the todo state.
// The reducer decides how the state changes when an action arrives.

export default todoSlice.reducer;
