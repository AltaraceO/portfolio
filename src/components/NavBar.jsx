import * as React from "react";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core";
import { alpha } from "@material-ui/core/styles/colorManipulator";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

const pages = ["About", "Projects", "Exercises", "CV", "Contact"];

const useStyles = makeStyles((theme) => ({
  nav: {
    position: "sticky",
    top: 0,
    padding: "1rem",
    color: "#fff",
    backgroundColor: alpha("#5d5c61", 0.9),
    "& a.active": {
      color: "#1c1c1e",
      backgroundColor: alpha("#b3b6bb", 1),
      borderRadius: "3px",
    },
    zIndex: "999",
  },
  mainBox: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  navButtons: {
    padding: "0.5rem",
    fontSize: "0.8rem",
    letterSpacing: 2,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      letterSpacing: 0,
    },
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
            <Tooltip title="Back to top" placement="right-end">
              <Typography
                data-header="my-name"
                color="#f2ebe0"
                noWrap
                component="div"
                variant="h6"
                sx={{
                  letterSpacing: 2,
                  cursor: "pointer",
                  fontSize: "2rem",
                  paddingLeft: "1rem",
                  mr: 2,
                  display: { md: "flex" },
                }}
              >
                ORI ALTARACE
              </Typography>
            </Tooltip>
          </Link>
        </Box>

        <Box className={classes.buttonBox}>
          {pages.map((page) => (
            <Link
              data-test={page}
              activeClass="active"
              to={page}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              key={page}
            >
              <div className={classes.navButtons}>{page.toUpperCase()}</div>
            </Link>
          ))}
        </Box>
      </Box>
    </div>
  );
};
export default NavBar;
