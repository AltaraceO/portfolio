import React from "react";

import {
  Grid,
  Paper,
  Typography,
  Box,
  Link,
  Divider,
  MuiThemeProvider,
  createTheme,
} from "@material-ui/core";
import useStyles from "./useSyles";
import { GitHub, Web } from "@mui/icons-material";
import sites from "../data";

const THEME = createTheme({
  typography: {
    fontSize: 10,
  },
});

export const Exercises = () => {
  const getExercises = sites.filter((site) => site.type === "exercise");

  const classes = useStyles();
  return (
    <MuiThemeProvider theme={THEME}>
      <Grid
        id="Exercises"
        container
        justifyContent="center"
        // spacing={5}
        className={classes.trContainer}
      >
        {getExercises.map((site, idx) => {
          return (
            <Grid key={idx} item xs={10} sm={6} md={4}>
              <Paper className={classes.tr}>
                <img src={site.image} alt="page" className="card-image" />
                <Box paddingX={1}>
                  <Typography
                    className={classes.title}
                    variant="h6"
                    component="h2"
                  >
                    {site.name}
                  </Typography>
                  <Divider light />
                  <Box className={classes.linkContainer}>
                    <Link
                      className={classes.itemLink}
                      href={site.url}
                      target="_blank"
                    >
                      <Web
                        sx={{
                          marginRight: "3px",
                          width: 14,
                        }}
                      />
                      <Typography> {site.site.toUpperCase()}</Typography>
                    </Link>
                    <Link
                      className={classes.itemLink}
                      href={site.repo}
                      target="_blank"
                    >
                      <GitHub sx={{ marginRight: "3px", width: 14 }} />
                      <Typography> REPOSITORY</Typography>
                    </Link>
                  </Box>
                  <Divider light />
                  <Box className={classes.techBox}>
                    {site.tech.map((item, idx) => {
                      return (
                        <Typography className={classes.techs} key={idx}>
                          {item}
                        </Typography>
                      );
                    })}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </MuiThemeProvider>
  );
};
