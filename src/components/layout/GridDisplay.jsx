import { Grid, Paper, Stack, Box } from "@mui/material";
import images from "../../assets/index";

import React from "react";

const GridDisplay = () => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} alignItems="stretch" sx={{}}>
      <Box
        sx={{
          backgroundImage: `url(${images.backgroundSideBarMobile})`,
          height: 500,
        }}
      >
        Hello world
      </Box>
      <Paper
        sx={{
          backgroundColor: "blue",
        }}
      >
        Hello World
      </Paper>
    </Stack>
  );
};

export default GridDisplay;
