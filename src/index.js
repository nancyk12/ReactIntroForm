import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import MovieTablePage from "./pages/MovieTablePage";
import OneMoviePage from "./pages/OneMoviePage";
import AddMoviePage from "./pages/AddMoviePage";
import MovieSearch from "./pages/MovieSearch";
import MovieCard from "./components/MovieCard";
import App from "./App"
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/allMovies",
        element: <MovieTablePage/>
      },
      {
        path: "/addMovie",
        element: <AddMoviePage/>
      },
      {
        path: "/MovieSearch",
        element: <MovieSearch/>,
        children: [
          {
            path: "/MovieSerch/:title",
            element: <MovieCard />
          } 
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

