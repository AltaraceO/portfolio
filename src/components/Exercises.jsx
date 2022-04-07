import React from "react";

import { Grid, Paper, Typography, Box, Link, Divider } from "@material-ui/core";
import useStyles from "./useSyles";
import { GitHub, Web } from "@mui/icons-material";
import sites from "../data";

export const Exercises = () => {
  const getExercises = sites.filter((site) => site.type === "exercise");

  const classes = useStyles();
  return (
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
                  variant="subtitle1"
                  component="h2"
                >
                  {site.name}
                </Typography>
                <Divider light />
                <Box className="card-link url">
                  <Web sx={{ width: 13 }} />
                  <Link href={site.url} target="_blank" variant="body2">
                    Checkout the site on {site.site}
                  </Link>
                </Box>
                <Box className="card-link git">
                  <GitHub sx={{ width: 13 }} />
                  <Link href={site.repo} target="_blank" variant="body2">
                    Repository
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
  );
};
