
// STEP 1: Import useState from React.
// useState allows us to store and update the text entered by the user.
import { useState } from "react";

// Import the custom hook to access shared Todo functions
// from the React Context.
import { useTodo } from "../Context";

function TodoForm() {

    // STEP 2: Create a state variable to store the Todo message.
    // todo stores the text entered by the user.
    // setTodo updates the text whenever the user types.
    // Initially, the input field is empty.
    const [todo, setTodo] = useState("");

    // STEP 3: Get the addTodo function from the Todo Context.
    // This function adds a new task to the Todo list.
    const { addTodo } = useTodo();

    // STEP 4: Create a function to handle form submission.
    const add = (e) => {

        // Prevent the browser from refreshing the page
        // when the form is submitted.
        e.preventDefault();

        // STEP 5: Check whether the input field is empty.
        // If no text has been entered, stop the function.
        if (!todo) {
            return;
        }

        // STEP 6: Add the new Todo to the list.
        // Pass the task text and set completed to false
        // because a newly created task is not completed yet.
        addTodo({
            todo,
            completed: false
        });

        // STEP 7: Clear the input field after adding the task.
        // This allows the user to enter another Todo.
        setTodo("");
    };

    // STEP 8: Display the Todo form.
    return (
        // Call the add function whenever the form is submitted.
        <form onSubmit={add} className="flex">

            {/* STEP 9: Input field for entering a new Todo. */}
            <input
                type="text"

                // Show this message when the input is empty.
                placeholder="Write Todo..."

                // Apply Tailwind CSS classes for styling.
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"

                // Connect the input value to the React state.
                value={todo}

                // Update the todo state whenever the user types.
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
            />

            {/* STEP 10: Button to submit the form and add the Todo. */}
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                Add
            </button>
        </form>
    );
}

// STEP 11: Export the component so it can be used in App.jsx.
export default TodoForm;
