import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  NavDropdown,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "./Waving-Greece-flag.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
// import Categories from "../Pages/Categories";
import Blog from "../Pages/Blog";
import Food from "../Pages/Categories/Food";
import Travel from "../Pages/Categories/Travel";
import Sport from "../Pages/Categories/Sport";
import OliveArticle from "../Pages/Categories/ArticleFood/OliveArticle";
import ArticleDive from "../Pages/Categories/ArticleSport/ArticleDive";
import ArticleAthens from "../Pages/Categories/ArticleTravel/ArticleAthens";

export default class header extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar
            sticky="top"
            collapseOnSelect
            expand="md"
            bg="primary"
            variant="dark"
          >
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="40"
                  width="40"
                  className="d-inline-block align-center"
                  alt="Logo"
                />
                {"  Blog-site"}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsiv-nanbar-nav" />
              <Navbar.Collapse id="responsiv-nanbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    {"Home"}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    {"About us"}
                  </Nav.Link>
                  <NavDropdown title="Categorys" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1" as={Link} to="/food">
                      Food
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2" as={Link} to="/sport">
                      Dive
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3" as={Link} to="/travel">
                      History
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item eventKey="4.4">
                      Separated link
                    </NavDropdown.Item> */}
                  </NavDropdown>
                  <Nav.Link as={Link} to="/blog">
                    {"Blog"}
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="me-3"
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            {/* <Route path="Categories" element={<Categories />} /> */}
            {/* <Route path=":bg-nested-dropdown" element={<Categories />} /> */}
            <Route path="food" element={<Food />} />
            <Route path="travel" element={<Travel />} />
            <Route path="sport" element={<Sport />} />
            <Route path="blog" element={<Blog />} />
            <Route path="articlefood" element={<OliveArticle />} />
            <Route path="articledive" element={<ArticleDive />} />
            <Route path="articleathens" element={<ArticleAthens />} />
          </Routes>
        </Router>
      </>
    );
  }
}
