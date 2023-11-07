import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style.css";

const MyCard = () => {
  return (
    <Container className="container">
      <Row>
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
      <Row>
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
      <Row>
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
