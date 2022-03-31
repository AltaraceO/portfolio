import React from "react";
import { Link, Box } from "@material-ui/core";
import CV from "../Ori_Altarace_CV.pdf";

export const Cv = () => {
  return (
    <>
      <Box>
        <Link href={CV} download>
          Download as PDF
        </Link>
      </Box>
      <br />
      <object width="400" height="500" type="application/pdf" data={CV}>
        <p>pdf</p>
      </object>
    </>
  );
};
