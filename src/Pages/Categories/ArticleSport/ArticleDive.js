import React, { Component } from "react";
import { CardGroup, Container, Card, Navbar, Button } from "react-bootstrap";

export default class ArticleDive extends Component {
  render() {
    return (
      <div>
        <>
          <Container>
            <div>
              <br />
              <Card>
                <Card.Header>
                  {" "}
                  <h1>Freediving</h1>
                </Card.Header>
                <br />
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.{" "}
                    </p>
                    <footer className="blockquote-footer">
                      Signed in as: <cite title="Source Title"> Mark Otto</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
              <br />
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://images.pexels.com/photos/3041869/pexels-photo-3041869.jpeg?cs=srgb&dl=pexels-john-cahil-rom-3041869.jpg&fm=jpg"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>Freediving</Card.Title>

                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </Card.Text>
                  <Card.Text>Last updated 35 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
              <br />
              <Card border="primary" style={{ width: "70rem" }}>
                <Card.Header>Freediving</Card.Header>
                <Card.Body>
                  <Card.Title>Freediving it's fanny !</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    exercitationem nisi necessitatibus, voluptatibus neque
                    quisquam labore molestias eaque atque quidem illo possimus
                    ipsam accusamus quod, quasi rerum quaerat beatae minima
                    nihil rem blanditiis adipisci quam iure? Harum dolor
                    corrupti tenetur saepe eius, nam ratione soluta consectetur
                    dicta commodi voluptatibus voluptate libero in facere,
                    asperiores quae ex illo sequi! Odio a qui eius excepturi
                    voluptate asperiores omnis dolores itaque sapiente impedit
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </div>
          </Container>
        </>
      </div>
    );
  }
}
