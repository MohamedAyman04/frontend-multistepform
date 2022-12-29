import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import images from "../../assets/index";
import { useTheme } from "@mui/material/styles";
import GridDisplay from "../layout/GridDisplay";

//    backgroundImage: `${
//             matches
//               ? `url(${images.backgroundSideBarMobile})`
//               : `url(${images.backgroundSideBarDesktop})`
//          }`,

const Header = ({ matches }) => {
  const theme = useTheme();
  return (
    <Container
      maxWidth={matches ? false : "md"}
      sx={{
        minHeight: "90vh",
        borderRadius: "10px",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <GridDisplay />
    </Container>
  );
};

export default Header;
