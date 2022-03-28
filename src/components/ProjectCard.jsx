import React from "react";
import { Grid, Paper, Typography, Box, makeStyles } from "@material-ui/core";
import { Web } from "@mui/icons-material";
import sites from "../data";

const useStyles = makeStyles({
  techs: {
    fontSize: "8px",
    marginRight: "5px",
  },
  techBox: {
    width: "100%",
    lineHeight: "8px",
    display: "flex",
    flexWrap: "wrap",
  },
});

export const ProjectCard = () => {
  const classes = useStyles();
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
                <Box className={classes.techBox}>
                  {/* {console.log(typeof site.tech)} */}
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
    </>
  );
};
