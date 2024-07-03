import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "../components/About";
import Blog from "../components/Blog";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../dashboard/DashboardLayout";
import EditBooks from "../dashboard/EditBooks";
import ManageBooks from "../dashboard/ManageBooks";
import UploadBook from "../dashboard/UploadBook";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import SingleBook from "../shop/SingleBook";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/book/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/book/${params.id}`),
      },
    ],
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
