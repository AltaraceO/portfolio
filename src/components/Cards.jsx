import React from "react";
import { Grid } from "@material-ui/core";
import { ProjectCard } from "./ProjectCard";

export const Cards = () => {
  return (
    <Grid container spacing={5}>
      <ProjectCard />
    </Grid>
  );
};
