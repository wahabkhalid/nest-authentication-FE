import MinimalLayout from "../layouts/MinimalLayout";
import Login from "../views/auth/Login";

const LoginRoutes = {
  path: "/",
  element: <MinimalLayout />,

  children: [
    {
      path: "/login",
      element: <Login />,
    },
  ],
};

export default LoginRoutes;
