import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  NavDropdown,
  FormControl,
} from "react-bootstrap";

const Navbarstyle = ({ filter, starate }) => {
  const [rate, setRate] = useState(0);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand
            style={{
              borderColor: "CadetBlue",
              borderStyle: "Solid",
              padding: "5px",
            }}
            href="#"
          >
            Films, séries TV
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <div>
              <StarRatingComponent
                starCount={5}
                // value={rate}
                onStarClick={(value) => starate(value)}
              />
            </div>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => filter(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarstyle;
