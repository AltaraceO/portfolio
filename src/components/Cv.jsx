import React from "react";
import { Link, Divider } from "@material-ui/core";
import CV from "../Ori_Altarace_CV.pdf";

export const Cv = () => {
  return (
    <>
      <object width="100%" height="500" type="application/pdf" data={CV}>
        <p>pdf</p>
      </object>

      <Divider />
      <Link href={CV} download>
        Download as PDF
      </Link>
    </>
  );
};
