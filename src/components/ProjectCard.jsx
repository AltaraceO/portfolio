import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  makeStyles,
  Link,
} from "@material-ui/core";
import { GitHub, Web } from "@mui/icons-material";
import sites from "../data";

const useStyles = makeStyles({
  techs: {
    backgroundColor: "#f3f2f2",
    fontSize: "8px",
    marginRight: "5px",
    borderRadius: "25%",
    paddingLeft: "2px",
    paddingRight: "2px",
  },
  techBox: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  tr: {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
    "&:hover": {
      boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
    },
  },
});

export const ProjectCard = () => {
  const classes = useStyles();
  return (
    <>
      {sites.map((site, idx) => {
        return (
          <Grid key={idx} item xs={4}>
            <Paper className={classes.tr}>
              <img src={site.image} alt="page" className="card-image" />
              <Box paddingX={1}>
                <Typography variant="subtitle1" component="h2">
                  {site.name}
                </Typography>
                <Box className="card-link">
                  <Web sx={{ width: 13 }} />
                  <Link href={site.url} variant="body2">
                    Checkout the site on {site.site}
                  </Link>
                </Box>
                <Box className="card-link">
                  <GitHub sx={{ width: 13 }} />
                  <Link href={site.repo} variant="body2">
                    Repository
                  </Link>
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
