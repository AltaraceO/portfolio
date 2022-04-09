import * as React from "react";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core";
import { alpha } from "@material-ui/core/styles/colorManipulator";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const pages = ["About", "Projects", "Exercises", "CV", "Contact"];

const useStyles = makeStyles((theme) => ({
  nav: {
    position: "sticky",
    top: 0,
    padding: "1rem",
    // backgroundColor: alpha("#ced0d3", 0.9),
    backgroundColor: alpha("#5d5c61", 0.9),
    "& a.active": {
      backgroundColor: alpha("#b3b6bb", 1),
      borderRadius: "3px",
    },
  },
  mainBox: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  buttons: {
    display: "block",
    color: "rgb(61, 61, 61)",
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
  const classes = useStyles();

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
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Typography
              color="rgb(61, 61, 61)"
              noWrap
              component="div"
              variant="h6"
              sx={{ paddingLeft: "1rem", mr: 2, display: { md: "flex" } }}
            >
              Ori Altarace
            </Typography>
          </Link>
        </Box>

        <Box className={classes.buttonBox}>
          {pages.map((page) => (
            <Link
              activeClass="active"
              to={page}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              key={page}
            >
              <Button sx={{ color: "#fff" }} className={classes.buttons}>
                {page}
              </Button>
            </Link>
          ))}
        </Box>
      </Box>
    </div>
  );
};
export default NavBar;
