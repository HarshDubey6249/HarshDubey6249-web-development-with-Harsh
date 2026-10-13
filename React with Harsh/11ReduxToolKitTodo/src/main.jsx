
// STEP 1: Import StrictMode from React.
//
// StrictMode helps identify potential problems in your
// React application during development.
//
// It may cause some functions or effects to run an extra
// time in development to help reveal bugs.
// It does not render an extra visible UI element.

import { StrictMode } from 'react'


// STEP 2: Import createRoot from React DOM.
//
// createRoot() creates the root where React will render
// your application inside the HTML page.
//
// In index.html, there should be an element like:
// <div id="root"></div>

import { createRoot } from 'react-dom/client'


// STEP 3: Import the global CSS file.
//
// This file contains CSS styles that can be used
// throughout your application.

import './index.css'


// STEP 4: Import the main App component.
//
// App.jsx contains the main application UI.
// It renders AddTodo and Todos.

import App from './App.jsx'


// STEP 5: Import Provider from React Redux.
//
// Provider makes the Redux store available to React
// components nested inside it.
//
// Without Provider, components generally cannot access
// the store through useSelector() and useDispatch().

import { Provider } from 'react-redux'


// STEP 6: Import the Redux store.
//
// The store was created in app/store.js using
// configureStore() from Redux Toolkit.
//
// It holds the state managed by your todo reducer.

import { store } from './app/store.js'


// STEP 7: Find the root HTML element and render React.
//
// document.getElementById('root') finds the HTML element
// with the ID "root".
//
// createRoot() prepares that element for React rendering.
// render() displays the React component tree inside it.

createRoot(document.getElementById('root')).render(

  /*
    STEP 8: Wrap App with Provider.

    store={store} gives Provider access to your Redux store.

    All components inside Provider can access that store
    through React Redux hooks, including:
    - useSelector() to read state.
    - useDispatch() to dispatch actions.

    App and its child components are therefore able
    to use Redux.
  */

  <Provider store={store}>

    {/* STEP 9: Render the main application component. */}
    <App />

  </Provider>,

)
