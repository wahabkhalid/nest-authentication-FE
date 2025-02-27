import MainLayout from "../layouts/MainLayout";
import MobileHeader from "../layouts/MainLayout/MobileHeader";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,

  children: [
    {
      path: "/header",
      element: <MobileHeader />,
    },
  ],
};

export default MainRoutes;
