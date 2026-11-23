
// STEP 1: Import the functions needed from React.

// createContext creates a Context to share data between components.
// useContext allows components to access the shared Context data.
import { createContext, useContext } from "react";

// STEP 2: Create the Todo Context.

// TodoContext will be used to share Todo-related data and functions
// with components without passing props manually through every level.
export const TodoContext = createContext({

  // Store the list of Todo tasks.
  // This is the default example data used when no Provider value
  // is available above a component in the React component tree.
  todos: [
    {
      id: 1,                  // Unique ID of the Todo task.
      todo: " Todo msg",       // Text or description of the task.
      completed: false,       // false means the task is not completed.
    },
  ],

  // STEP 3: Define default functions for Todo operations.

  // Function placeholder for adding a new Todo task.
  addTodo: (todo) => {},

  // Function placeholder for updating an existing Todo task.
  // id identifies the task, and todo contains its updated details.
  updateTodo: (id, todo) => {},

  // Function placeholder for deleting a Todo task using its ID.
  deleteTodo: (id) => {},

  // Function placeholder for changing a task's completion status.
  toggleComplete: (id) => {},
});

// STEP 4: Create a custom hook to access Todo Context.

// useTodo() lets other components access the shared Todo data
// and functions by calling this hook.
export const useTodo = () => {
  return useContext(TodoContext);
};

// STEP 5: Export the Context Provider.

// TodoProvider allows a parent component to provide Todo data
// and functions to all its descendant components.
//
// In App.jsx, the Provider receives the actual values through
// its "value" prop, including todos, addTodo, deleteTodo,
// updateTodo, and toggleComplete.
export const TodoProvider = TodoContext.Provider;
