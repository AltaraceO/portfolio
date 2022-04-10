import { makeStyles } from "@material-ui/core";

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
  trMain: {
    maxWidth: "900px",
    margin: "2rem auto",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
    },
  },
  // trMain: {
  //   maxWidth: "900px",
  //   margin: "2rem auto",
  //   boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
  //   "&:hover": {
  //     boxShadow:
  //       "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
  //   },
  // },
  trContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  tr: {
    margin: "1.5rem",

    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
    },
  },
  // tr: {
  //   margin: "1.5rem",
  //   boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
  //   "&:hover": {
  //     boxShadow:
  //       "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
  //   },
  // },
  title: {
    paddingBottom: "0.5rem",
    fontWeight: 500,
  },
});

export default useStyles;
