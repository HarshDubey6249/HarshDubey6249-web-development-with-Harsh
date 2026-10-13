
/*
  STEP 1: Import hooks from React Redux.

  useSelector:
  Used to read data from the Redux store.

  useDispatch:
  Used to send actions to the Redux store.
*/

import { useSelector, useDispatch } from "react-redux";


/*
  STEP 2: Import the removeTodo action creator.

  removeTodo is defined in todoSlice.js.

  We use it when the user clicks the Delete button.
*/

import { removeTodo } from "../features/todo/todoSlice";


/*
  STEP 3: Create the Todos component.

  onEdit is a prop received from App.jsx.

  In App.jsx, we pass:
  <Todos onEdit={setEditTodo} />

  This means onEdit refers to the setEditTodo function.

  When we call onEdit(todo), the selected todo is sent
  to App.jsx and stored in its editTodo state.
*/

function Todos({ onEdit }) {

  /*
    STEP 4: Read todos from the Redux store.

    useSelector() reads the state managed by Redux.

    state represents the complete Redux state.

    state.todos accesses the todos array.

    Example:
    [
      { id: "abc123", text: "Learn React" },
      { id: "xyz789", text: "Learn Redux" }
    ]

    Whenever the selected Redux state changes,
    React Redux updates this component automatically.
  */

  const todos = useSelector((state) => state.todos);


  /*
    STEP 5: Get the dispatch function.

    dispatch() sends an action to the Redux store.

    We use dispatch to delete a todo.

    Example:
    dispatch(removeTodo("abc123"))
  */

  const dispatch = useDispatch();


  /*
    STEP 6: Return the user interface.

    The fragment <>...</> lets us return multiple
    elements without adding an extra HTML element.
  */

  return (
    <>

      {/* STEP 7: Display the heading */}
      <div>Todos</div>


      {/*
        STEP 8: Create a list of todos.

        todos.map() loops through every todo in the array.

        For each todo, React creates one <li> element.

        Example:
        If todos contains 3 items, map() creates 3 list items.

        todo represents the current item in the loop.
      */}

      <ul className="list-none">

        {todos.map((todo) => (

          /*
            STEP 9: Display one todo.

            key={todo.id} gives React a unique identifier
            for each list item.

            React uses keys to identify items when the
            list changes.

            The Tailwind CSS classes style the list item.
          */

          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >

            {/* STEP 10: Display the todo's text */}

            <div className="text-white">
              {todo.text}
            </div>


            {/*
              STEP 11: Update button.

              onClick runs when the user clicks Update.

              () => onEdit(todo) is an arrow function.

              It passes the current todo object to onEdit.

              Example:
              onEdit({
                id: "abc123",
                text: "Learn React"
              })

              In App.jsx, onEdit is setEditTodo.

              Therefore:
              setEditTodo(todo) stores the selected todo.

              AddTodo.jsx receives this todo through props
              and fills the input field with its existing text.

              Important:
              This button selects a todo for editing.
              It does not directly update the Redux store.
            */}

            <button
              onClick={() => onEdit(todo)}
              className="text-white bg-indigo-500 py-1 px-4 rounded"
            >
              Update
            </button>


            {/*
              STEP 12: Delete button.

              onClick runs when the user clicks Delete.

              dispatch(removeTodo(todo.id)) sends a
              removeTodo action to the Redux store.

              todo.id identifies which todo to delete.

              Example:
              dispatch(removeTodo("abc123"))

              The removeTodo reducer filters out the
              matching todo from the todos array.

              useSelector() then receives the updated state,
              and React re-renders the list.
            */}

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 py-1 px-4 rounded"
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </>
  );
}


/*
  STEP 13: Export the component.

  App.jsx imports Todos so it can display the todo list.
*/

export default Todos;
