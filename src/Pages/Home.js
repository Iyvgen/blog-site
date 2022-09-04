import React, { Component } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import CarouselBox from "../components/CarouselBox";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container className="mb-4">
          <h1 className="text-center m-4">Blogging</h1>
          <Row md={3}>
            <Card>
              <Card.Img
                className="d-block w-100 h-100"
                variant="top"
                src="https://images.pexels.com/photos/1660915/pexels-photo-1660915.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
              <Card.Body>
                <Card.Title>Food</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                className="d-block w-100 h-100"
                variant="top"
                src="https://images.pexels.com/photos/2290744/pexels-photo-2290744.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
              <Card.Body>
                <Card.Title>Olive Oil</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                className="d-block w-100 h-100 "
                variant="top"
                src="https://images.pexels.com/photos/2611070/pexels-photo-2611070.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
              <Card.Body>
                <Card.Title>Swimming</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
    );
  }
}
