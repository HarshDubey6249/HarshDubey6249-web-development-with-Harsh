
import { useState } from "react";

// Import the CSS file for styling the application
import "./App.css";

// Import the component responsible for adding and updating todos
import AddTodo from "./componenets/AddTodo.jsx";

// Import the component responsible for displaying and deleting todos
import Todos from "./componenets/Todos.jsx";

function App() {

  // STEP 1: Create state to store the todo currently being edited.
  //
  // editTodo = Stores the selected todo object.
  // setEditTodo = Function used to update the editTodo state.
  //
  // Initially, editTodo is null because no todo is being edited.
  //
  // Example:
  // editTodo = null
  //
  // After clicking Update on a todo:
  // editTodo = { id: 1, text: "Learn React" }

  const [editTodo, setEditTodo] = useState(null);

  return (
    <>
      {/* STEP 2: Display the main heading of the application */}
      <h1>Learn Redux Toolkit</h1>

      {/* STEP 3: Render the AddTodo component */}
      {/*
        Pass editTodo as a prop so AddTodo knows which todo
        is currently selected for editing.

        Pass setEditTodo as a prop so AddTodo can clear the
        selected todo after saving or cancelling an edit.

        If editTodo is null, AddTodo works in Add mode.

        If editTodo contains a todo object, AddTodo works
        in Edit mode and displays that todo's text.
      */}
      <AddTodo
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />

      {/* STEP 4: Render the Todos component */}
      {/*
        Pass setEditTodo to Todos through the onEdit prop.

        When the user clicks Update on a particular todo,
        Todos calls onEdit(todo).

        This updates the editTodo state in App.

        App then passes the selected todo to AddTodo,
        allowing the input field to display its text.
      */}
      <Todos onEdit={setEditTodo} />

      {/*
        STEP 5: React automatically updates the UI.

        When editTodo changes:
        1. App re-renders.
        2. AddTodo receives the selected todo.
        3. The input field displays the existing text.
        4. The user can modify and save the todo.
      */}
    </>
  );
}

// STEP 6: Export App so it can be imported into main.jsx
// and rendered as the main application component.
export default App;
