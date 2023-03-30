import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AddMoviePage from "./pages/AddMoviePage";
import MovieTablePage from "./pages/MovieTablePage";
import MovieSearch from "./pages/MovieSearch";
//simport MovieCard from "./components/MovieCard";
import App from "./App"
//import "./index.css";
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
        element: <HomePage />,
        errorElement:<ErrorPage />
      },
      {
        path: "/addMovie",
        element: <AddMoviePage/>,
        errorElement:<ErrorPage />
      },
      {
        path: "/allMovies",
        element: <MovieTablePage/>,
        errorElement:<ErrorPage />
      },

     {
        path: "/MovieSearch",
        element: <MovieSearch/>, 
        
       /* children: [
          {
            path: "/MovieSerch/:title",
            element: <MovieCard />
          } 
        ]*/
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

