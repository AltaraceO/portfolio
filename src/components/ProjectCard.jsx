import React from "react";
import { Grid, Paper, Typography, Box } from "@material-ui/core";
import { Web } from "@mui/icons-material";
import sites from "../data";

export const ProjectCard = () => {
  return (
    <>
      {sites.map((site, idx) => {
        return (
          <Grid key={idx} item xs={4}>
            <Paper elevation={3}>
              <img src={site.image} alt="page" className="card-image" />
              <Box paddingX={1}>
                <Typography variant="subtitle2" component="h2">
                  {site.name}
                </Typography>
                <Box className="card-link">
                  <Web sx={{ width: 13 }} />
                  <Typography variant="body2" component="p">
                    Link
                  </Typography>
                </Box>
                <Box>
                  {site.tech.map((item) => {
                    return <div>{item}</div>;
                  })}
                </Box>
              </Box>
            </Paper>
          </Grid>
        );
      })}
    </>
  );
};
