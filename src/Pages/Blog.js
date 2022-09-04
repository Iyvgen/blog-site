import React, { Component } from "react";
import { Col, Container, ListGroup, Row, Card } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <div class="d-flex">
              <div class="d-flex align-items-center flex-shrink-1 mt-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3 mt-2"
                  src="https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
                <div class="flex-grow-1 ms-3">
                  <h5>Blog post. Food</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the
                  </p>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="d-flex align-items-center flex-shrink-1">
                <img
                  width={150}
                  height={150}
                  className="mr-3 mt-2"
                  src="https://images.pexels.com/photos/4050076/pexels-photo-4050076.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
                <div class="flex-grow-1 ms-3">
                  <h5>Blog post. Dive</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the
                  </p>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="d-flex align-items-center flex-shrink-1">
                <img
                  width={150}
                  height={150}
                  className="mr-3 mt-2"
                  src="https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
                <div class="flex-grow-1 ms-3">
                  <h5>Blog post. History</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Food</ListGroup.Item>
                <ListGroup.Item>Dive</ListGroup.Item>
                <ListGroup.Item>History</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Side vidget</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
