import React from "react";
import {
  makeStyles,
  AppBar,
  Container,
  Toolbar,
  Avatar,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-scroll";

const navigationLinks = ["About", "Projects", "Exercises", "CV", "Contact"];

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
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
  avatar: {
    marginRight: "auto",
  },
}));

export const NavBarToo = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Avatar className={classes.avatar}>ORI ALTARACE</Avatar>
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
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer anchor="right" open={true}>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
        <Divider />
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
      </SwipeableDrawer>
    </AppBar>
  );
};
