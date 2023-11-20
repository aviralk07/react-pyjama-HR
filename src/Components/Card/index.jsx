import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MyCard = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <Container className="container" ref={cardsRef}>
      <Row className="d-none d-sm-flex no-gutters">
        <Col>
          <Card className="card">
            <Card.Title className="card-title">Source candidates</Card.Title>
            <Card.Img
              variant="top"
              src="./Assets/images/1card.jpg"
              alt="Card Image"
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title>Evaluate candidates</Card.Title>
            <Card.Img
              variant="top"
              src="./Assets/images/2card.jpg"
              alt="Card Image"
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title>Schedule interview</Card.Title>
            <Card.Img
              variant="top"
              src="./Assets/images/3card.jpg"
              alt="Card Image"
            />
          </Card>
        </Col>
      </Row>
      <Row className="d-none d-sm-flex no-gutters">
        <Col>
          <Card className="card">
            <Card.Img
              variant="top"
              src="./Assets/images/card4.webp"
              alt="Card Image"
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="./Assets/images/card5.webp"
              alt="Card Image"
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="./Assets/images/card6.webp"
              alt="Card Image"
            />
          </Card>
        </Col>
      </Row>
      <Row className="d-none d-sm-flex no-gutters">
        <Col>
          <Card className="card">
            <Card.Img
              variant="top"
              src="./Assets/images/card7.webp"
              alt="Card Image"
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="./Assets/images/card8.webp"
              alt="Card Image"
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="./Assets/images/card9.webp"
              alt="Card Image"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyCard;
