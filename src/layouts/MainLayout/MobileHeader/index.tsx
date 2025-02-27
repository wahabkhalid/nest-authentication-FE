import Grid from "@mui/material/Grid2";

import Network from "../../../common/svg/Network";
import WifiSignal from "../../../common/svg/WifiSignal";
import Battery from "../../../common/svg/Battery";
import { Box, Typography } from "@mui/material";

const MobileHeader: React.FC = () => {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <Grid
      container
      alignItems="center"
      sx={{ paddingX: 2, paddingY: 1, width: "100%", height: "30px" }}
    >
      <Grid size={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            fontWeight: 500,
            color: "#141414", // Match the icon color
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", fontWeight: 600 }}
          >
            {time}
          </Typography>
        </Box>
      </Grid>

      <Grid size={9}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Network />
          <WifiSignal />
          <Battery />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MobileHeader;
