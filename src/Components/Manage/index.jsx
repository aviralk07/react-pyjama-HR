import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
const Manage = ({ avatarSrc, username, bio }) => {
  return (
    <Container className="container" id="manage">
      <Row className="row1">
        <Col xs={12} md={6} className="col1 col2">
          <button className="btn3">Manage</button>
          <h4>Manage your talent pool, effortlessly.</h4>
         
          <p>
            "We stopped using Excel completely. PyjamaHR ATS has changed the way
            we <span> manage and track candidates;</span> significantly
            improving our <span> team's productivity.</span> We are always on
            top of good talent."
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
            src="https://framerusercontent.com/images/XfS3FWY8JQyEcCgA303iEda29Vk.png?scale-down-to=1024"
            alt="Horizon"
            width={500}
            height={400}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Manage;
