import React, { Component } from "react";
import { CardGroup, Container, Card, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Travel extends Component {
  render() {
    return (
      <>
        <div>
          <h2 className="mt-5 "> History</h2>
        </div>
        <CardGroup className="mt-5">
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?cs=srgb&dl=pexels-pixabay-164336.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Athens</Card.Title>
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
                to="/articleathens"
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
              src="https://images.pexels.com/photos/3224232/pexels-photo-3224232.jpeg?cs=srgb&dl=pexels-hert-niks-3224232.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Western civilization</Card.Title>
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
              src="https://images.pexels.com/photos/101974/pexels-photo-101974.jpeg?cs=srgb&dl=pexels-markus-spiske-101974.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title> Mediterranean</Card.Title>
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
              src="https://images.pexels.com/photos/772686/pexels-photo-772686.jpeg?cs=srgb&dl=pexels-josiah-lewis-772686.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Greek culture</Card.Title>
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
              src="https://images.pexels.com/photos/3224230/pexels-photo-3224230.jpeg?cs=srgb&dl=pexels-hert-niks-3224230.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Katharevousa</Card.Title>
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
              src="https://images.pexels.com/photos/772698/pexels-photo-772698.jpeg?cs=srgb&dl=pexels-josiah-lewis-772698.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title> Sparta</Card.Title>
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
