
// STEP 1: Export the TodoContext, TodoProvider, and useTodo
// from the TodoContext.js file.
//
// TodoContext  - Stores the shared Todo Context.
// TodoProvider - Provides Todo data and functions to child components.
// useTodo      - Custom hook used to access the shared Todo data.
//
// This allows other files to import these items directly
// from the Context folder without specifying TodoContext.js.

export { TodoContext, TodoProvider, useTodo } from "./TodoContext";
