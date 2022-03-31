import React from "react";
import { Link, Divider } from "@material-ui/core";
import CV from "../Ori_Altarace_CV.pdf";

export const Cv = () => {
  return (
    <>
      <embed src={CV} width="100%" height="1000px" />

      <Divider />
      <Link href={CV} download>
        Download as PDF
      </Link>
    </>
  );
};
