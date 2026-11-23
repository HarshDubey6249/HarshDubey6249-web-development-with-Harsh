
// STEP 1: Import useState from React.
// useState allows us to store and update data inside this component.
import { useState } from "react";

// Import the custom hook to access Todo data and functions
// shared through React Context.
import { useTodo } from "../Context";

function TodoItem({ todo }) {
  // STEP 2: Get the functions needed to manage Todo tasks.
  // These functions are provided by TodoContext through TodoProvider.
  const { toggleComplete, deleteTodo, updateTodo } = useTodo();

  // STEP 3: Create state variables for editing the Todo.

  // isTodoEditable controls whether the task text can be edited.
  // false means editing is disabled initially.
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  // todoMsg stores the current text entered in the input field.
  // Initially, it contains the existing Todo message.
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  // STEP 4: Save the edited Todo message.
  const editTodo = () => {
    // Update the Todo using its ID.
    // Copy the existing Todo properties and replace its text
    // with the updated message stored in todoMsg.
    updateTodo(todo.id, { ...todo, todo: todoMsg });

    // Turn off editing mode after saving the changes.
    setIsTodoEditable(false);
  };

  // STEP 5: Toggle the Todo's completion status.
  const toggleCompleted = () => {
    // Pass the Todo ID to the Context function.
    // It changes the task from completed to incomplete, or vice versa.
    toggleComplete(todo.id);
  };

  // STEP 6: Display the Todo item on the screen.
  return (
    <div
      // Apply different background colors based on completion status.
      // Green means completed; purple means incomplete.
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      {/* STEP 7: Checkbox to mark the Todo as completed or incomplete. */}
      <input
        type="checkbox"
        className="cursor-pointer"

        // The checkbox reflects the current completion status.
        checked={todo.completed}

        // Run this function whenever the checkbox changes.
        onChange={toggleCompleted}
      />

      {/* STEP 8: Input field to display or edit the Todo message. */}
      <input
        type="text"

        // Add a visible border and padding in editing mode.
        // Remove the border when editing is disabled.
        // Strike through the text if the Todo is completed.
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}

        // Display the current message stored in todoMsg.
        value={todoMsg}

        // Update todoMsg whenever the user types something.
        onChange={(e) => setTodoMsg(e.target.value)}

        // Allow typing only when editing mode is enabled.
        readOnly={!isTodoEditable}
      />

      {/* STEP 9: Edit and Save button. */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"

        // Decide whether to save changes or enable editing.
        onClick={() => {
          // Do not allow editing if the Todo is already completed.
          if (todo.completed) return;

          // If editing is already enabled, save the changes.
          if (isTodoEditable) {
            editTodo();
          } else {
            // Otherwise, enable editing mode.
            setIsTodoEditable((prev) => !prev);
          }
        }}

        // Disable the Edit/Save button for completed tasks.
        disabled={todo.completed}
      >
        {/* Show a folder icon while editing (Save).
            Show a pencil icon when editing is disabled (Edit). */}
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* STEP 10: Delete Todo button. */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"

        // Delete this Todo using its unique ID.
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

// STEP 11: Export the component so other files can use it.
export default TodoItem;
