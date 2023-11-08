import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
const Collaborate = ({ avatarSrc, username, bio }) => {
  return (
    <Container className="container" id="collaborate">
      <Row className="row1 my4">
        <Col xs={12} md={6} className="col1 col2">
          <button className="btn3">Collaborate</button>
          <h4>Make better hiring decisions, together.</h4>

          <p>
            "We have been able to make better hiring decisions with{" "}
            <span> real-time visibility </span> over the entire recruitment
            process. Now, we can effortlessly <span> manage feedback,</span>{" "}
            leave comments for our hiring team, and{" "}
            <span> generate hiring reports </span>
            within seconds."
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
          <div>
            <h6>‘</h6>
            <h6 className="quot">‘</h6>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Image
            className="feature-img feature-img1 "
            src="https://framerusercontent.com/images/Q0DY2RgvRYOv53udNbTs05f0Wo.png"
            alt="Horizon"
            width={600}
            height={500}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Collaborate;
