import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import { Container } from "@material-ui/core";
import { Cards } from "../Cards";
import { Cv } from "../Cv";
import { Contact } from "../Contact";
import NavBar from "../NavBar";
import { About } from "../About";
import { Exercises } from "../Exercises";

class App extends React.Component {
  theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
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
          {/* <BrowserRouter> */}
          <NavBar />
          <Container className="container">
            {/* <Route exact path="/"> */}
            <About />
            {/* </Route> */}
            {/* <Route exact path="/projects"> */}
            <Cards />
            <Exercises />
            {/* </Route> */}
            {/* <Route exact path="/cv/"> */}
            <Cv />
            {/* </Route> */}
            {/* <Route exact path="/contact/"> */}
            <Contact />
            {/* </Route> */}
          </Container>
          {/* </BrowserRouter> */}
        </ThemeProvider>
      </>
    );
  }
}

export default App;
