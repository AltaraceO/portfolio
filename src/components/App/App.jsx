import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { Cards } from "../Cards";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Cards />
      </Container>
    );
  }
}

export default App;
