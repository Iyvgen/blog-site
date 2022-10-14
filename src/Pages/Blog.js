import React, { Component } from "react";
import { Col, Container, ListGroup, Row, Card, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class Blog extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md="9">
              <div className="d-flex">
                <div className="d-flex align-items-center flex-shrink-1 mt-5">
                  <img
                    width={150}
                    height={150}
                    className="mr-3 mt-2"
                    src="https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400"
                  />
                  <div className="flex-grow-1 ms-3">
                    <h5>Blog post. Food</h5>
                    <Nav.Link as={Link} to="/articlefood2">
                      {"Cheese and bread"} 💙
                    </Nav.Link>
                    <p>21 September, 2022 by Julia Ryzhkova </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center flex-shrink-1 mt-5">
                  <img
                    width={150}
                    height={150}
                    className="mr-3 mt-2"
                    src="https://images.pexels.com/photos/4050076/pexels-photo-4050076.jpeg?auto=compress&cs=tinysrgb&w=400"
                  />
                  <div className="flex-grow-1 ms-3">
                    <h5>Blog post. Dive</h5>
                    <h6>Freediving it's fanny !</h6>
                    <p>30 August, 2022 by Leonie Lacey</p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center flex-shrink-1 mt-5">
                  <img
                    width={150}
                    height={150}
                    className="mr-3 mt-2"
                    src="https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=400"
                  />
                  <div className="flex-grow-1 ms-3">
                    <h5>Blog post. History</h5>
                    <Nav.Link as={Link} to="/articleathens">
                      {"Athens"} 💙
                    </Nav.Link>
                    <p>19 July, 2022 by Mark Otto</p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center flex-shrink-1 mt-5">
                  <img
                    width={150}
                    height={150}
                    className="mr-3 mt-2"
                    src="https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400"
                  />
                  <div className="flex-grow-1 ms-3">
                    <h5>Blog post. Food</h5>
                    <Nav.Link as={Link} to="/articlefood">
                      {"Olive oil"} 💙
                    </Nav.Link>
                    <p>21 September, 2022 by Mark Otto</p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center flex-shrink-1 mt-5">
                  <img
                    width={150}
                    height={150}
                    className="mr-3 mt-2"
                    src="https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400"
                  />
                  <div className="flex-grow-1 ms-3">
                    <h5>Blog post. Food</h5>
                    <Nav.Link as={Link} to="/articlefood3">
                      {"Fresh salat"} 💙
                    </Nav.Link>
                    <p>21 September, 2022 by Leonie Lacey</p>
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
              <h5 className="text-center mt-5 ">Categories</h5>
              <Card>
                <ListGroup
                  variant="flush"
                  className="text-start m-2  text-uppercase categories"
                >
                  <Nav.Link as={Link} to="/food">
                    {"Food"}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/sport">
                    {"Dive"}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/travel">
                    {"History"}
                  </Nav.Link>
                </ListGroup>
              </Card>

              <Card className="mt-3">
                <Card.Body>
                  <Card.Title>Side widget</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
        </Container>
      </>
    );
  }
}
