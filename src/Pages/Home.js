import React, { Component } from "react";
import { Button, Card, Container, Row, Nav } from "react-bootstrap";
import CarouselBox from "../components/CarouselBox";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        {/* <Container> */}
        <h1 className="text-center mt-5">Blogging</h1>
        <Row md={3} className="m-5">
          <Card>
            <Card.Img
              className="d-block w-100 h-100 mt-2"
              variant="top"
              src="https://images.pexels.com/photos/1660915/pexels-photo-1660915.jpeg?auto=compress&cs=tinysrgb&w=400"
            />
            <Card.Body>
              <Card.Title>Food</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </Card.Text>
              <Button
                variant="primary"
                className="btn-home"
                as={Link}
                to="/food"
              >
                More
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="d-block w-100 h-100 mt-2"
              variant="top"
              src="https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?cs=srgb&dl=pexels-pixabay-164336.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>History</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </Card.Text>
              <Button
                variant="primary"
                className="btn-home"
                as={Link}
                to="/travel"
              >
                More
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="d-block w-100 h-100 mt-2"
              variant="top"
              src="https://images.pexels.com/photos/2611070/pexels-photo-2611070.jpeg?auto=compress&cs=tinysrgb&w=400"
            />
            <Card.Body>
              <Card.Title>Diving</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </Card.Text>
              <Button
                variant="primary"
                className="btn-home"
                as={Link}
                to="/sport"
              >
                More
              </Button>
            </Card.Body>
          </Card>
        </Row>
        {/* </Container> */}
      </>
    );
  }
}
