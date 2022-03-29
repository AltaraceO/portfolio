import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Container } from "@material-ui/core";
import { Cards } from "../Cards";
import { Cv } from "../Cv";
import { Contact } from "../Contact";
import NavBar from "../NavBar";
import { About } from "../About";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          {/* <Routes> */}
          <Container className="container">
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/projects">
              <Cards />
            </Route>
            <Route exact path="/cv/">
              <Cv />
            </Route>
            <Route exact path="/contact/">
              <Contact />
            </Route>
          </Container>
          {/* </Routes> */}
        </BrowserRouter>
      </>
    );
  }
}

export default App;
