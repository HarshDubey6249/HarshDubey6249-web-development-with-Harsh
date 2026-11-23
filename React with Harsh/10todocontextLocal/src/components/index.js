
// STEP 1: Import the TodoForm component.
// TodoForm displays the form used to add new Todo tasks.
import TodoForm from "./TodoForm";

// STEP 2: Import the TodoItem component.
// TodoItem displays an individual task and allows users
// to edit, complete, or delete it.
import TodoItem from "./TodoItem";

// STEP 3: Export both components from a single file.
// This allows other files to import these components
// directly from the components folder.
export { TodoForm, TodoItem };
