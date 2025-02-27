import Grid from "@mui/material/Grid2";
import logo from "../../../common/svg/Logo.png";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LogoSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Grid sx={{ marginTop: "90%" }} onClick={handleClick}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={logo} alt="Logo" />
        <Typography>Oak SandPortal</Typography>
      </Box>
    </Grid>
  );
};

export default LogoSection;