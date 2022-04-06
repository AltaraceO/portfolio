import React from "react";
import { Link, Box } from "@material-ui/core";
import CV from "../Ori_Altarace_CV.pdf";

import { makeStyles } from "@material-ui/core";

const fileID = "14keq-Yr5EixpO1fHcLLgOZbQcEmeEP4cW8udbz5YMlY";

const useStyles = makeStyles((theme) => ({
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
}));

export const Cv = () => {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Link href={CV} download>
          Download CV
        </Link>
      </Box>
      <br />

      <iframe
        className={classes.pdfObject}
        title="cv"
        src={`https://docs.google.com/viewer?srcid=${fileID}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`}
        width="100%"
      ></iframe>
    </>
  );
};
