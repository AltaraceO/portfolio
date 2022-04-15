import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  techs: {
    backgroundColor: "#f3f2f2",
    fontSize: "8px",
    marginRight: "5px",
    borderRadius: "15%",
    paddingLeft: "4px",
    paddingRight: "4px",
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
    margin: "4rem auto",

    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
    "&:hover": {
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    },
  },
  trContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  tr: {
    margin: "4rem 1.5rem",

    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
    "&:hover": {
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    },
  },
  title: {
    letterSpacing: 2,
    paddingBottom: "0.5rem",
    paddingTop: "0.5rem",
    fontWeight: 500,
  },

  linkContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
    marginTop: "1rem",
    marginBottom: "1rem",
  },

  itemLink: {
    color: "#3e3e41",
    border: "1px solid #B3B6BB",
    display: "flex",
    borderRadius: "5px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "0.3rem",
    paddingRight: "6px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",

    "&:hover": {
      backgroundColor: "#B3B6BB",
      color: "#fff",
      border: "1px solid #6D6C6F",
      textDecoration: "none",
    },
  },
});

export default useStyles;
