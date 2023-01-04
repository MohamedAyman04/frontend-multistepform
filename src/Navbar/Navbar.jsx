import React from "react";
import images from "../assets/index";
import { useMediaQuery, Box, useTheme, Button } from "@mui/material";

const Navbar = () => {
  const steps = [
    {
      id: 1,
      info: "YOUR INFO",
    },
    {
      id: 2,
      info: "SELECT PLAN",
    },
    {
      id: 3,
      info: "ADD-ONS ",
    },
    {
      id: 4,
      info: "SUMMARY",
    },
  ];
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(${images.backgroundSideBarMobile})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "30vh",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {steps.map((step, index) => {
        return (
          <React.Fragment key={step.id}>
            <Button
              variant="filled"
              sx={{
                backgroundColor: "transparent",
                border: "1px solid white",
                borderRadius: "50%",
                color: "primary.main",
                fontSize: 14,
                aspectRatio: "1",
              }}
            >
              {step.id}
            </Button>
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default Navbar;
