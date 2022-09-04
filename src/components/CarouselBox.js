import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import grAImg from "../assets/grA.jpg";
import grBImg from "../assets/grB.jpg";
import grCImg from "../assets/grC.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel className="mt-3">
        <Carousel.Item>
          <img className="d-block, w-100% " src={grAImg} alt="grA" />
          <Carousel.Caption>
            <h3>Greece impresses, surprises, inspires</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block, w-100% h-100% " src={grBImg} alt="grB" />
          <Carousel.Caption>
            <h3>Greece impresses, surprises, inspires</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block, w-100% " src={grCImg} alt="grC" />
          <Carousel.Caption>
            <h3>Greece impresses, surprises, inspires</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
