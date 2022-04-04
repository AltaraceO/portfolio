import React from "react";
import { Link, Box } from "@material-ui/core";
import CV from "../Ori_Altarace_CV.pdf";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pdfObject: {
    display: "block",
    margin: "0 auto",
    width: 400,
    height: 500,
    [theme.breakpoints.down("xs")]: {
      width: 200,
      height: 300,
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
      <object className={classes.pdfObject} type="application/pdf" data={CV}>
        <p>pdf</p>
      </object>
    </>
  );
};
