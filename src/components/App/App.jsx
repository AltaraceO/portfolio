import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import { Cards } from "../Cards";
import { Cv } from "../Cv";
import { Contact } from "../Contact";
import { NavBar } from "../NavBar";
import { About } from "../About/About";
import { Exercises } from "../Exercises";

class App extends React.Component {
  theme = createTheme({
    overrides: {
      Button: {
        label: {
          color: "#f1f1f1",
        },
      },
    },
  });

  render() {
    return (
      <>
        <ThemeProvider theme={this.theme}>
          <NavBar />
          <About />
          <Cards />
          <Exercises />
          <Cv />
          <Contact />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
