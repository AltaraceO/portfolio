import React from "react";
import { Link } from "@material-ui/core";

import CV from "../Ori_Altarace_CV.pdf";

import { makeStyles } from "@material-ui/core";

const fileID = "14keq-Yr5EixpO1fHcLLgOZbQcEmeEP4cW8udbz5YMlY";

const useStyles = makeStyles((theme) => ({
  cvPage: {
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      paddingBottom: "2rem",
    },
  },
  pdfObject: {
    display: "block",
    margin: "0 auto",
    width: 400,
    height: 500,
    [theme.breakpoints.down("xs")]: {
      width: 300,
      height: 400,
    },
  },
  dlButton: {
    color: "black",
    backgroundColor: "#e8eff0",
    borderRadius: "5px",
    display: "inline-block",
    padding: " 1rem",
    margin: "2rem",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "white",
      textDecoration: "none",
    },
  },
}));

export const Cv = () => {
  const classes = useStyles();
  return (
    <div className={classes.cvPage} id="CV">
      <Link className={classes.dlButton} href={CV} download>
        Download CV
      </Link>

      <br />

      <iframe
        className={classes.pdfObject}
        title="cv"
        src={`https://docs.google.com/viewer?srcid=${fileID}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`}
        width="100%"
      ></iframe>
    </div>
  );
};
