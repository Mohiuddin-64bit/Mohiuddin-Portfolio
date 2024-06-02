import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About, Contact, Works } from "../components";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import SingleProject from "../Pages/SingleProject";
import Blogs from "../Pages/Blogs";
import SingleBlog from "../Pages/SingleBlog";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:id", element: <SingleProject /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <SingleBlog /> },
    ],
  }
]);