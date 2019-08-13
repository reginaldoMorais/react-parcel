import React, { Component } from "react";
import styled from "styled-components";
import Title from "./Title";
import Header from "./Header";
import Button from "./Button";
import Alert from "./Alert";

const Container = styled.section`
  background: #eee;
  height: calc(100vh - 80px);
  padding: 1rem;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertIsOpen: false
    };
  }

  alert() {
    this.setState({ alertIsOpen: !this.state.alertIsOpen });
    setTimeout(() => this.setState({ alertIsOpen: false }), 5000);
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <Title />
          <p style={{ margin: `1rem 0` }}>by Reginaldo Morais</p>
          <Button onClick={() => this.alert()}>Saudation</Button>
          <Alert
            color="warning"
            isOpen={this.state.alertIsOpen}
            onClick={() => this.alert()}
          >
            Hello Reginaldo Morais!
          </Alert>
        </Container>
      </>
    );
  }
}

export default App;
