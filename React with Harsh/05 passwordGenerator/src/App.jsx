
import { useCallback, useEffect, useRef, useState } from "react";

function App() {

  // useState: Stores the password length.
  // Default password length is 8.
  const [length, setLength] = useState(8);

  // Stores whether numbers should be included.
  // Initially, numbers are disabled.
  const [numberAllowed, setNumberAllowed] = useState(false);

  // Stores whether special characters should be included.
  // Initially, special characters are disabled.
  const [charAllowed, setCharAllowed] = useState(false);

  // Stores the generated password.
  const [password, setPassword] = useState("");

  // useRef: Creates a reference to the password input.
  // We will use it to select the password when copying.
  const passwordRef = useRef(null);

  // useCallback: Memorizes the passwordGenerator function.
  // It recreates the function only when its dependencies change.
  const passwordGenerator = useCallback(() => {

    // Initially, the password is an empty string.
    let pass = "";

    // Default character set containing uppercase and lowercase letters.
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // If numberAllowed is true, add digits to the character set.
    if (numberAllowed) str += "0123456789";

    // If charAllowed is true, add special characters.
    if (charAllowed) str += "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";

    // Loop runs according to the selected password length.
    for (let i = 1; i <= length; i++) {

      // Generates a random index between 0 and str.length - 1.
      let char = Math.floor(Math.random() * str.length);

      // Selects a random character and adds it to the password.
      pass += str.charAt(char);
    }

    // Updates the password state with the generated password.
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  // useCallback: Memorizes the copyPassword function.
  const copyPassword = useCallback(() => {

    // Selects the complete password inside the input field.
    passwordRef.current?.select();

    // Copies the generated password to the clipboard.
    window.navigator.clipboard.writeText(password);

  }, [password]);

  // useEffect: Automatically generates a new password
  // whenever the length, number option, or character option changes.
  useEffect(() => {

    passwordGenerator();

  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      {/* Main container for the password generator */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">

        {/* Application heading */}
        <h1 className="text-white text-center text-xl font-bold mb-3">
          Password Generator
        </h1>

        {/* Password display and copy button */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          {/* Displays the generated password */}
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-amber-200 text-black"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />

          {/* Copies password to clipboard when clicked */}
          <button
            onClick={copyPassword}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        {/* Password customization controls */}
        <div className="flex text-sm gap-x-2">

          {/* Password length slider */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                // Converts the slider value from string to number.
                setLength(Number(e.target.value));
              }}
            />
            <label>Length: {length}</label>
          </div>

          {/* Numbers checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {
                // Toggles number inclusion.
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Special characters checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => {
                // Toggles special character inclusion.
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
