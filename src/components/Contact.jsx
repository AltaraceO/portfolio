import { useEffect, useState } from "react";
import {
  Card,
  Box,
  Typography,
  Link,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  motionClass: {
    animation: `$fadeInRight 700ms ${theme.transitions.easing.easeInOut}`,
  },
  mainBox: {
    height: "70vh",
    marginTop: "8rem",
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
  bottomDiv: {
    backgroundColor: "#cbcacc",
    height: "30vh",
  },
}));

export const Contact = () => {
  const [visible, setVisible] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const cont = document.querySelector("#Contact");

    function check([entry]) {
      if (entry.isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
    const Obs = new IntersectionObserver(check);

    Obs.observe(cont);
  }, []);

  return (
    <div>
      <div
        className={
          visible
            ? `${classes.mainBox} ${classes.motionClass}`
            : `${classes.mainBox}`
        }
        id="Contact"
      >
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
            <Link href="mailto:orialtarace@gmail.com">
              orialtarace@gmail.com
            </Link>
          </Box>
          <Divider light />
          <Box
            display="flex"
            justifyContent="flex-end"
            gridGap="0.5rem"
            sx={{ padding: "1.5rem" }}
          >
            <Link
              style={{ color: "#128C7E" }}
              href="https://wa.me/972526787457"
              target="_blank"
            >
              <WhatsApp style={{ fontSize: "2.5rem" }} />
            </Link>
            <Link
              style={{ color: "black" }}
              href="https://github.com/AltaraceO"
              target="_blank"
            >
              <GitHub style={{ fontSize: "2.5rem" }} />
            </Link>
            <Link
              style={{ color: "#0270AD" }}
              href="https://www.linkedin.com/in/ori-a-3571a01a7/"
              target="_blank"
            >
              <LinkedIn style={{ fontSize: "2.5rem" }} />
            </Link>
          </Box>
        </Card>
      </div>
      <div className={classes.bottomDiv}></div>
    </div>
  );
};
