import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { alpha } from "@material-ui/core/styles/colorManipulator";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const pages = ["About", "Projects", "CV", "Contact"];

const useStyles = makeStyles((theme) => ({
  nav: {
    position: "sticky",
    top: 0,
    padding: "1rem",
    backgroundColor: alpha("#ced0d3", 0.9),
  },
  mainBox: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  buttons: {
    display: "block",
    color: "black",
  },
  buttonBox: {
    display: "flex",
    marginRight: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginRight: "0.5rem",
    },
  },
}));

const NavBar = () => {
  const history = useHistory();
  const classes = useStyles();

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
    <div className={classes.nav}>
      <Box
        className={classes.mainBox}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            color="rgb(61, 61, 61)"
            noWrap
            component="div"
            variant="h6"
            sx={{ paddingLeft: "1rem", mr: 2, display: { md: "flex" } }}
          >
            Ori Altarace
          </Typography>
        </Box>

        <Box className={classes.buttonBox}>
          {pages.map((page) => (
            <Button
              key={page}
              className={classes.buttons}
              onClick={() => buttonLinks({ page })}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Box>
    </div>
  );
};
export default NavBar;
