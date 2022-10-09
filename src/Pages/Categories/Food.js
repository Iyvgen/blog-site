import React, { Component } from "react";
import { CardGroup, Container, Card, Navbar, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OliveArticle from "./ArticleFood/OliveArticle";

export default class Food extends Component {
  render() {
    return (
      <>
        <div>
          <h2 className="mt-5 "> Healthy food</h2>
        </div>
        <CardGroup className="mt-5">
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?cs=srgb&dl=pexels-pixabay-33783.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Olive oil</Card.Title>
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
                to="/articlefood"
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
              src="https://images.pexels.com/photos/8770842/pexels-photo-8770842.jpeg?cs=srgb&dl=pexels-%D1%88%D0%B8%D1%88%D0%BA%D0%B8%D0%BD%D0%B0-%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D0%B0%D0%BD%D0%B0-8770842.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Cheese and bread</Card.Title>
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
              src="https://images.pexels.com/photos/4109912/pexels-photo-4109912.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4109912.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Fresh salat</Card.Title>
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
              src="https://images.pexels.com/photos/56019/mediterranean-food-tomatoes-red-56019.jpeg?cs=srgb&dl=pexels-pixabay-56019.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Tomato exlusive</Card.Title>
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
              src="https://images.pexels.com/photos/4252154/pexels-photo-4252154.jpeg?cs=srgb&dl=pexels-cottonbro-4252154.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Cooking idea</Card.Title>
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
              src="https://images.pexels.com/photos/3621221/pexels-photo-3621221.jpeg?cs=srgb&dl=pexels-rfstudio-3621221.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>Vegetable and oil</Card.Title>
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
