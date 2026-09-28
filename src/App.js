import React from "react";
import { Navbar, Container, Nav, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              My React App
            </Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="mt-5">

          <h1 className="text-center mb-5">
            Welcome to My React App
          </h1>

          <Row>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card One</Card.Title>
                  <Card.Text>
                    This is the first card.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card Two</Card.Title>
                  <Card.Text>
                    This is the second card.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card Three</Card.Title>
                  <Card.Text>
                    This is the third card.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>

      </div>
    </React.Fragment>
  );
}

export default App;