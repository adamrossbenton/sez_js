import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import './index.css';

// COMPONENETS
import App from './App';
import Error from "./pages/Error.js"
import Easy from "./pages/Easy.js"
import Medium from "./pages/Medium.js"
import Hard from "./pages/Hard.js"

// HOOKS
import GameHooks from './hooks/GameHooks.js';

// OTHER
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error />,
    children: [
      {
        path: "easy",
        element: <Easy
        />,
      },
      {
        path: "medium",
        element: <Medium
        />,
      },
      {
        path: "hard",
        element: <Hard
        />,
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
