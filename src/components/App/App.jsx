import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { Cards } from "../Cards";
import NavBar from "../NavBar";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Container className="container">
          <Cards />
        </Container>
      </>
    );
  }
}

export default App;
