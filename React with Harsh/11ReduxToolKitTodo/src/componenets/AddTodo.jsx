
/*
  STEP 1: Import the required hooks and Redux functions.

  useState:
  Used to store and update the text inside the input field.

  useEffect:
  Used to run code when the selected todo (editTodo) changes.

  useDispatch:
  Used to send actions to the Redux store.

  addTodo:
  Redux action for adding a new todo.

  updateTodo:
  Redux action for updating an existing todo.
*/

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";


/*
  STEP 2: Create the AddTodo component.

  editTodo:
  Contains the todo currently selected for editing.
  Example: { id: 1, text: "Learn React" }
  If no todo is selected, editTodo is null.

  setEditTodo:
  Function received from App.jsx.
  It lets this component clear the selected todo
  after updating or cancelling.
*/

function AddTodo({ editTodo, setEditTodo }) {

  /*
    STEP 3: Create state for the input field.

    input:
    Stores the text currently typed by the user.

    setInput:
    Updates the input state.

    Initially, input is an empty string.

    Example:
    input = "Learn Redux Toolkit"
  */

  const [input, setInput] = useState("");


  /*
    STEP 4: Create the Redux dispatch function.

    dispatch() sends an action to Redux.

    We will use it to add a new todo or update
    an existing todo in the Redux store.
  */

  const dispatch = useDispatch();


  /*
    STEP 5: Fill the input field when editing a todo.

    useEffect runs when editTodo changes.

    If editTodo contains a todo:
    1. Read its text using editTodo.text.
    2. Put that text into the input field using setInput().

    Example:
    editTodo = { id: 1, text: "Learn React" }

    The input field will display:
    Learn React

    [editTodo] is the dependency array.
    It tells React to run this effect when editTodo changes.
  */

  useEffect(() => {

    // Check whether a todo has been selected for editing.
    if (editTodo) {

      // Display the selected todo's existing text in the input.
      setInput(editTodo.text);

    }

  }, [editTodo]);


  /*
    STEP 6: Handle form submission.

    This function runs when the user clicks the submit
    button or presses Enter inside the input field.
  */

  const addTodoHandler = (e) => {

    /*
      Prevent the browser from refreshing the page
      when the form is submitted.

      By default, HTML forms may reload the page.
      preventDefault() stops that behavior.
    */

    e.preventDefault();


    /*
      STEP 7: Validate the input.

      input.trim() removes spaces from the beginning
      and end of the text.

      If the input is empty or contains only spaces,
      return stops the function.

      Example:
      "   ".trim() becomes ""
    */

    if (!input.trim()) return;


    /*
      STEP 8: Check whether we are editing or adding.

      If editTodo is not null:
      We are editing an existing todo.

      Otherwise:
      We are adding a new todo.
    */

    if (editTodo) {

      /*
        STEP 9: Update an existing todo.

        dispatch() sends the updateTodo action to Redux.

        We pass an object containing:
        id   -> identifies which todo to update.
        text -> contains the new text.

        Example:
        {
          id: 1,
          text: "Learn React and Redux"
        }

        The reducer uses the ID to find the correct todo
        and replace its text.
      */

      dispatch(
        updateTodo({
          id: editTodo.id,
          text: input.trim(),
        })
      );


      /*
        STEP 10: Exit edit mode.

        After dispatching the update action, setEditTodo(null)
        clears the selected todo.

        This tells the component that editing has finished.

        The button will change from "Save Changes"
        back to "Add Todo".
      */

      setEditTodo(null);

    } else {

      /*
        STEP 11: Add a new todo.

        This branch runs when no todo is selected for editing.

        dispatch(addTodo(input.trim())) sends the new text
        to the addTodo reducer in todoSlice.js.

        Redux then adds the new todo to the list.
      */

      dispatch(addTodo(input.trim()));

    }


    /*
      STEP 12: Clear the input field.

      After adding or updating, reset the input
      so the user can enter another todo.

      setInput("") changes the input value to an
      empty string.
    */

    setInput("");

  };


  /*
    STEP 13: Build the user interface.

    The form contains:
    1. An input field.
    2. An Add Todo or Save Changes button.
    3. A Cancel button when editing.
  */

  return (

    /*
      onSubmit calls addTodoHandler when the form
      is submitted.
    */

    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">

      {/* STEP 14: Input field for entering or editing a todo */}

      <input
        type="text"

        // Placeholder appears when the input is empty.
        placeholder="Enter a Todo..."

        /*
          value={input} makes this a controlled input.

          React state controls what text appears here.
        */
        value={input}

        /*
          onChange runs whenever the user types or deletes text.

          e.target.value contains the current input text.

          setInput() saves that text in React state.
        */
        onChange={(e) => setInput(e.target.value)}

        // Tailwind CSS classes for styling the input.
        className="bg-gray-800 rounded border border-gray-700 text-gray-100 py-1 px-3 leading-8"
      />


      {/* STEP 15: Submit button */}

      <button
        type="submit"
        className="text-white bg-indigo-500 py-2 px-6 rounded"
      >

        {/*
          Conditional rendering:

          If editTodo exists:
          Display "Save Changes".

          If editTodo is null:
          Display "Add Todo".

          The same button handles both operations.
        */}

        {editTodo ? "Save Changes" : "Add Todo"}

      </button>


      {/* STEP 16: Display Cancel only while editing */}

      {editTodo && (

        <button
          /*
            type="button" prevents this button from
            submitting the form.
          */
          type="button"

          /*
            When Cancel is clicked:
            1. Clear editTodo to exit edit mode.
            2. Clear the input field.
            3. Do not dispatch an update action.
          */
          onClick={() => {
            setEditTodo(null);
            setInput("");
          }}

          className="text-white bg-gray-600 py-2 px-4 rounded"
        >
          Cancel
        </button>

      )}

    </form>
  );
}


/*
  STEP 17: Export the component.

  This allows App.jsx to import and render AddTodo.
*/

export default AddTodo;
