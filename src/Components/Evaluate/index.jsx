import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
const Evaluate = ({ avatarSrc, username, bio }) => {
  return (
    <Container className="container" id="evaluate">
      <Row className="row1">
        <Col xs={12} md={6}>
          <Image
            className="feature-img"
            src="https://framerusercontent.com/images/q7dB4SG1OZYbFanadCauatXFyM.png"
            alt="Horizon"
            width={500}
            height={500}
          />
        </Col>
        <Col xs={12} md={6} className="col1">
          <button className="btn3">Evaluate</button>
          <h4>Source top talent, with ease.</h4>
          <p>
            "I finally found a tool to <span> automate manual tasks</span> like
            scheduling interviews, sending tests, and so on. But what truly
            impresses me is the<span> AI Resume Match</span> feature, which has
            been very helpful in shortlisting the best-fit candidate for a job
            role."
          </p>
          <br />
          <div className="user-profile">
            <img src={avatarSrc} alt="User Avatar" className="avatar" />
            <div className="user-details">
              <h4>{username}</h4>
              <p>{bio}</p>
              <br />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Evaluate;
