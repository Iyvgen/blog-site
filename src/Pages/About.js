import React, { Component } from "react";
import { Button, Col, Container, Form, Nav, Row, Tab } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-3">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Framework</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    alt="px"
                    className="d-block w-100 h-100px"
                    src="https://images.pexels.com/photos/1001990/pexels-photo-1001990.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                  <p className="par1 mt-5">
                    Але щоб ви зрозуміли, звідки виникає це хибне уявлення
                    людей, цуратись насолоди і вихваляти страждання, я розкрию
                    перед вами всю картину і роз’ясню, що саме говорив цей
                    чоловік, який відкрив істину, якого я б назвав зодчим
                    щасливого життя. Дійсно, ніхто не відкидає, не зневажає, не
                    уникає насолод тільки через те, що це насолоди, але лише
                    через те, що тих, хто не вміє розумно вдаватися насолоді,
                    осягають великі страждання. Так само як немає нікого, хто
                    полюбивши, вважав за краще і зажадав би саме страждання
                    тільки за те, що це страждання, а не тому, що інший раз
                    виникають такі обставини, коли страждання і біль приносять
                    якесь і чималу насолоду. Якщо скористатися найпростішим
                    прикладом, то хто з нас став би займатися якими б то не було
                    тяжкими фізичними вправами, якщо б це не приносило з собою
                    якоїсь користі? І хто міг би по справедливості дорікнути
                    прагнення до насолоди, яке не несло б з собою ніяких
                    неприємностей, або того, хто уникав би такого страждання,
                    яке не приносило б з собою ніякої насолоди?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    alt="px"
                    className="d-block w-100 h-100"
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                  <p className="par2 mt-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    alt="px"
                    className="d-block w-100 h-100"
                    src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                  <p className="par3 mt-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    alt="px"
                    className="d-block w-100 h-100"
                    src="https://images.pexels.com/photos/8124413/pexels-photo-8124413.jpeg?auto=compress&cs=tinysrgb&w=500"
                  />
                  <p className="par4 mt-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    alt="px"
                    className="d-block w-100 h-100"
                    src="https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                  <p className="par5 mt-5">
                    Але щоб ви зрозуміли, звідки виникає це хибне уявлення
                    людей, цуратись насолоди і вихваляти страждання, я розкрию
                    перед вами всю картину і роз’ясню, що саме говорив цей
                    чоловік, який відкрив істину, якого я б назвав зодчим
                    щасливого життя. Дійсно, ніхто не відкидає, не зневажає, не
                    уникає насолод тільки через те, що це насолоди, але лише
                    через те, що тих, хто не вміє розумно вдаватися насолоді,
                    осягають великі страждання. Так само як немає нікого, хто
                    полюбивши, вважав за краще і зажадав би саме страждання
                    тільки за те, що це страждання, а не тому, що інший раз
                    виникають такі обставини, коли страждання і біль приносять
                    якесь і чималу насолоду. Якщо скористатися найпростішим
                    прикладом, то хто з нас став би займатися якими б то не було
                    тяжкими фізичними вправами, якщо б це не приносило з собою
                    якоїсь користі? І хто міг би по справедливості дорікнути
                    прагнення до насолоди, яке не несло б з собою ніяких
                    неприємностей, або того, хто уникав би такого страждання,
                    яке не приносило б з собою ніякої насолоди?
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <Row className="mt-5 mb-5" style={{ width: "50%" }}>
          <h1 className="text-center">Contact</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email adress</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text>
                We'll never share your email whith anyone else
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="mt-5 btn-home" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
