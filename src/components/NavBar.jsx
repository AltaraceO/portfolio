import * as React from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const pages = ["About", "Projects", "CV", "Contact"];

const NavBar = () => {
  const history = useHistory();

  const buttonLinks = (key) => {
    switch (key.page) {
      case "About":
        history.push("/");
        break;
      case "Projects":
        history.push("/projects");
        break;
      case "CV":
        history.push("/cv");
        break;
      case "Contact":
        history.push("/contact");
        break;

      default:
        break;
    }
  };

  return (
    <AppBar position="fixed" display="flex">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            noWrap
            component="div"
            variant="h6"
            sx={{ paddingLeft: "1rem", mr: 2, display: { md: "flex" } }}
          >
            Ori Altarace
          </Typography>
        </Box>

        <Box sx={{ display: "flex", marginRight: "2rem" }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 2, display: "block" }}
              onClick={() => buttonLinks({ page })}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Box>
    </AppBar>
  );
};
export default NavBar;
