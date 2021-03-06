import React, { useState } from "react";
import {
  makeStyles,
  AppBar,
  Container,
  Toolbar,
  Tooltip,
  Typography,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
} from "@material-ui/core";
import { alpha } from "@material-ui/core/styles/colorManipulator";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-scroll";

const navigationLinks = ["About", "Projects", "Exercises", "CV", "Contact"];

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
  nav: {
    "& a.active": {
      // color: "#1c1c1e",
      color: "#fff",
      backgroundColor: alpha("#b3b6bb", 1),
      borderRadius: "3px",
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
  title: {
    marginRight: "auto",
  },
  titleText: {
    letterSpacing: 2,
    cursor: "pointer",
    // color: "#f2ebe0",
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" color="default">
      <Container className={classes.nav}>
        <Toolbar disableGutters>
          <Link
            className={classes.title}
            activeClass="false"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Tooltip title="Back to top" placement="right-end">
              <Typography
                data-header="my-name"
                noWrap
                component="div"
                variant="h5"
                className={classes.titleText}
              >
                ORI ALTARACE
              </Typography>
            </Tooltip>
          </Link>
          <Hidden xsDown>
            {navigationLinks.map((item) => (
              <Link
                data-test={item}
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                key={item}
              >
                <div className={classes.navButtons}>{item.toUpperCase()}</div>
              </Link>
            ))}
          </Hidden>
          <Hidden smUp>
            <IconButton>
              <MenuIcon
                onClick={() => {
                  setOpen(true);
                }}
              />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        className={classes.nav}
        anchor="right"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div>
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem key="unique">
              <Link
                data-test={item}
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                key={item}
              >
                <div className={classes.navButtons}>{item.toUpperCase()}</div>
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};
