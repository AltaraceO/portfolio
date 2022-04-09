import { useEffect, useRef, useState } from "react";
import {
  Card,
  Box,
  Typography,
  Link,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { GitHub, LinkedIn } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  testClass: {
    animation: `$fadeInRight 3000ms ${theme.transitions.easing.easeInOut}`,
  },
  mainBox: {
    height: "100vh",
    marginTop: "2rem",
    margin: "auto",
    width: 600,

    [theme.breakpoints.down("sm")]: {
      width: 500,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
  },
  "@keyframes fadeInRight": {
    from: {
      opacity: 0,
      transform: "translateX(300px)",
    },
    to: {
      opacity: 1,
    },
  },
}));

export const Contact = () => {
  const cont = document.querySelector("#Contact");

  const classes = useStyles();

  const check = (entry) => {
    console.log(entry[0].target);
    // entry[0].target.classList.toggle("is-active", entry.isIntersecting);
  };

  const Obs = new IntersectionObserver(check);

  Obs.observe(cont);
  return (
    <div className={classes.mainBox} id="Contact">
      {console.log(cont.classList)}
      <Card>
        <Box sx={{ m: "2rem" }}>
          <Typography variant="h4" component="h1">
            Get in touch!
          </Typography>
        </Box>
        <Divider light />
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ padding: "1.5rem" }}
        >
          <Typography>Phone Number</Typography>
          <Link href="tel:+972-52-678-7457">052-678-7457</Link>
        </Box>
        <Divider light />
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ padding: "1.5rem" }}
        >
          <Typography>eMail</Typography>
          <Link href="mailto:orialtarace@gmail.com">orialtarace@gmail.com</Link>
        </Box>
        <Divider light />
        <Box
          display="flex"
          justifyContent="flex-end"
          gridGap="0.5rem"
          sx={{ padding: "1.5rem" }}
        >
          <Link href="https://github.com/AltaraceO" target="_blank">
            <GitHub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ori-a-3571a01a7/"
            target="_blank"
          >
            <LinkedIn />
          </Link>
        </Box>
      </Card>
    </div>
  );
};
