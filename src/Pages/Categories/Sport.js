import React, { Component } from "react";
import { CardGroup, Container, Card, Navbar, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class Sport extends Component {
  render() {
    return (
      <>
        <div>
          <h2 className="mt-5 "> Diving</h2>
        </div>
        <CardGroup className="mt-5">
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3098681/pexels-photo-3098681.jpeg?cs=srgb&dl=pexels-ma%C3%ABl-balland-3098681.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title> Freediving</Card.Title>
              <Navbar>
                <Container>
                  <Navbar.Brand href="#home"></Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </Card.Text>
              <Button
                variant="primary"
                className="btn-home"
                as={Link}
                to="/articledive"
              >
                {""}
                Read more
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 48 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/2105937/pexels-photo-2105937.jpeg?cs=srgb&dl=pexels-symeon-ekizoglou-2105937.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Fancy diving</Card.Title>
              <Navbar>
                <Container>
                  <Navbar.Brand href="#home"></Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      Signed in as: <a href="#login">Julia Ryzhkova</a>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </Card.Text>
              <Button variant="primary" className="btn-home">
                Read more
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3046629/pexels-photo-3046629.jpeg?cs=srgb&dl=pexels-pia-3046629.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Scoring the dive</Card.Title>
              <Navbar>
                <Container>
                  <Navbar.Brand href="#home"></Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      Signed in as: <a href="#login"> Leonie Lacey</a>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </Card.Text>
              <Button variant="primary" className="btn-home">
                Read more
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 15 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>

        <CardGroup className="mt-5">
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1540108/pexels-photo-1540108.jpeg?cs=srgb&dl=pexels-oleksandr-pidvalnyi-1540108.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Safety</Card.Title>
              <Navbar>
                <Container>
                  <Navbar.Brand href="#home"></Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      Signed in as: <a href="#login">Daria Roshchyna</a>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </Card.Text>
              <Button variant="primary" className="btn-home">
                Read more
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/2105912/pexels-photo-2105912.jpeg?cs=srgb&dl=pexels-symeon-ekizoglou-2105912.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Dive position</Card.Title>
              <Navbar>
                <Container>
                  <Navbar.Brand href="#home"></Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </Card.Text>
              <Button variant="primary" className="btn-home">
                Read more
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3041866/pexels-photo-3041866.jpeg?cs=srgb&dl=pexels-john-cahil-rom-3041866.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Control of rotation</Card.Title>
              <Navbar>
                <Container>
                  <Navbar.Brand href="#home"></Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      Signed in as: <a href="#login">Daria Roshchyna</a>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </Card.Text>
              <Button variant="primary" className="btn-home">
                Read more
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <br />
      </>
    );
  }
}
