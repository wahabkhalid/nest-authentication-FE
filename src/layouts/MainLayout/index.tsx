import { Box } from "@mui/material";
import MobileHeader from "./MobileHeader";
import { Outlet } from "react-router-dom";
import LogoSection from "./LogoSection";

const MainLayout = () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "100%" }}>
        <MobileHeader />
        <LogoSection />
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
