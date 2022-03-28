import React from "react";
import { Grid, Paper } from "@material-ui/core";
import sites from "../data";

export const ProjectCard = () => {
  return (
    <>
      {sites.map((site, idx) => {
        return (
          <Grid key={idx} item xs={4}>
            <Paper elevation={3}> {site.number}</Paper>
          </Grid>
        );
      })}
    </>
  );
};
