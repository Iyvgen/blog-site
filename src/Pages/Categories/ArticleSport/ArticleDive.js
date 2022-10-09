import React, { Component } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

export default class ArticleDive extends Component {
  constructor() {
    super();
    this.state = {
      comment: [],
    };
    this.myRef = React.createRef();
  }

  addComment = () => {
    let comment = this.myRef.current.value;
    let comments = this.state.comment;
    comments.push(comment);
    this.setState({
      comments: "comments",
    });
    this.myRef.current.value = "";
  };
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
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum exercitationem nisi necessitatibus, voluptatibus neque
                      quisquam labore molestias eaque atque quidem illo possimus
                      ipsam accusamus quod, quasi rerum quaerat beatae minima
                      nihil rem blanditiis adipisci quam iure? Harum dolor
                      corrupti tenetur saepe eius, nam ratione soluta
                      consectetur dicta commodi voluptatibus voluptate libero in
                      facere, asperiores quae ex illo sequi! Odio a qui eius
                      excepturi voluptate asperiores omnis dolores itaque
                      sapiente impedit.
                    </p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    exercitationem nisi necessitatibus, voluptatibus neque
                    quisquam labore molestias eaque atque quidem illo possimus
                    ipsam accusamus quod, quasi rerum quaerat beatae minima
                    nihil rem blanditiis adipisci quam iure? Harum dolor
                    corrupti tenetur saepe eius, nam ratione soluta consectetur
                    dicta commodi voluptatibus voluptate libero in facere,
                    asperiores quae ex illo sequi! Odio a qui eius excepturi
                    voluptate asperiores omnis dolores itaque sapiente impedit.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </div>
            <br />
            <hr />
            <h1>Comments</h1>
            <div>
              <ul>
                {this.state.comment.map((item, index) => (
                  <Card
                    border="primary"
                    style={{ width: "70rem", margin: "5px" }}
                  >
                    <Card body key={index.toString()}>
                      {item}
                    </Card>
                  </Card>
                ))}
              </ul>
            </div>
            <div>
              <Form>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Your comments :</Form.Label>
                  <Form.Control as="textarea" rows="3" ref={this.myRef} />
                </Form.Group>
              </Form>
            </div>
            <div>
              <Button
                onClick={this.addComment}
                className="mt-5 btn-home"
                variant="primary"
                type="submit"
              >
                Add Comment
              </Button>
            </div>
            <br />
          </Container>
        </>
      </div>
    );
  }
}
