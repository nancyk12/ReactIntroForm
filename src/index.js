
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MovieTablePage from "./pages/MovieTablePage";
import AddNewMoviePage from "./pages/AddNewMoviePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            index:true,
            element: <HomePage />
        },
        {
            path: "/all-movies",
            element: <MovieTablePage/>
        },
        {
            path: "/single-movie",
            element: <MoviePage/>
        },
        {
            path: "/add-movie",
            element: <AddNewMoviePage/>
        }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


