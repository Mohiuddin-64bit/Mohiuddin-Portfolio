import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About, Contact, Works } from "../components";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import SingleProject from "../Pages/SingleProject";
import Blogs from "../Pages/Blogs";
import SingleBlog from "../Pages/SingleBlog";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddProject from "../Pages/Dashboard/AddProject";
import AddBlogs from "../Pages/Dashboard/AddBlogs";
import ErrorPage from "../components/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:id", element: <SingleProject /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <SingleBlog /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/dashboard/add-blogs", element: <AddBlogs /> },
      { path: "/dashboard/add-projects", element: <AddProject /> },
    ],
  }

]);