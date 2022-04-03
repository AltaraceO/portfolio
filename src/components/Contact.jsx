import { ClassNames } from "@emotion/react";
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
  mainBox: {
    display: "inline-block",
    width: 600,
    margin: "3rem",

    [theme.breakpoints.down("sm")]: {
      width: 500,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
  },
}));

export const Contact = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainBox}>
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
    </Box>
  );
};
