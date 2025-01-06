import { createBrowserRouter, Navigate } from "react-router-dom";
import UserList from "../components/userList/userList";
import LoginForm from "../components/auth/login/LoginForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "/*",
    element: <Navigate to="/login" />, 
  },
]);

export default router;

