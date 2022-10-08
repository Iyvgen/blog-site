import React, { Component } from "react";
import { CardGroup, Container, Card, Navbar, Button } from "react-bootstrap";

export default class OliveArticle extends Component {
  render() {
    return (
      <>
        <Container>
          <div>
            <br />
            <Card>
              <Card.Header>
                {" "}
                <h1>Olive oil</h1>
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
                src="https://images.pexels.com/photos/5732755/pexels-photo-5732755.jpeg?cs=srgb&dl=pexels-laker-5732755.jpg&fm=jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Olive oil</Card.Title>

                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </Card.Text>
                <Card.Text>Last updated 20 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <br />
            <Card border="primary" style={{ width: "70rem" }}>
              <Card.Header>Olive oil</Card.Header>
              <Card.Body>
                <Card.Title>Olive oil it's way of healthy.</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  exercitationem nisi necessitatibus, voluptatibus neque
                  quisquam labore molestias eaque atque quidem illo possimus
                  ipsam accusamus quod, quasi rerum quaerat beatae minima nihil
                  rem blanditiis adipisci quam iure? Harum dolor corrupti
                  tenetur saepe eius, nam ratione soluta consectetur dicta
                  commodi voluptatibus voluptate libero in facere, asperiores
                  quae ex illo sequi! Odio a qui eius excepturi voluptate
                  asperiores omnis dolores itaque sapiente impedit
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </div>
        </Container>
      </>
    );
  }
}
