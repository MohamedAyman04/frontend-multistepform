import { Container } from "@mui/material";
import React from "react";
import images from "../../assets/index";
import { useTheme } from "@mui/material/styles";

const Header = ({ matches }) => {
  const theme = useTheme();
  return (
    <Container
      maxWidth={matches ? false : "md"}
      color={theme.primary.main}
      sx={{
        minHeight: "90vh",
        backgroundImage: `${
          matches
            ? `url(${images.backgroundSideBarMobile})`
            : `url(${images.backgroundSideBarDesktop})`
        }`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    ></Container>
  );
};

export default Header;
