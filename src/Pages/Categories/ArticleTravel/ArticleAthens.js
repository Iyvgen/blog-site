import React, { Component } from "react";
import { CardGroup, Container, Card, Navbar, Button } from "react-bootstrap";

export default class ArticleAthens extends Component {
  render() {
    return (
      <>
        <Container>
          <div>
            <br />
            <Card>
              <Card.Header>
                {" "}
                <h1>Athens</h1>
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
                src="https://images.pexels.com/photos/6336038/pexels-photo-6336038.jpeg?cs=srgb&dl=pexels-tom-d%27arby-6336038.jpg&fm=jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Athens</Card.Title>

                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </Card.Text>
                <Card.Text>Last updated 30 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <br />
            <Card border="primary" style={{ width: "70rem" }}>
              <Card.Header>Athens</Card.Header>
              <Card.Body>
                <Card.Title>
                  Athens it's history Europien civilization
                </Card.Title>
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
