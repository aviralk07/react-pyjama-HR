import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const Manage = ({ avatarSrc, username, bio }) => {
  const manageRef = useRef(null);

  useEffect(() => {
    // Set up GSAP animations for the Manage component
    gsap.fromTo(
      manageRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: manageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Container className="container" id="manage" ref={manageRef}>
      <Row className="row1">
        <Col xs={12} md={6} className="col1 col2 mobileview1-1 ">
          <button className="btn3">Manage</button>
          <h4>Manage your talent pool, effortlessly.</h4>

          <p>
            "We stopped using Excel completely. PyjamaHR ATS has changed the way
            we <span> manage and track candidates;</span> significantly
            improving our <span> team's productivity.</span> We are always on
            top of good talent."
          </p>
          <br />
          <div className="user-profile ">
            <img src={avatarSrc} alt="User Avatar" className="avatar" />
            <div className="user-details user-details-1">
              <h4>{username}</h4>
              <p>{bio}</p>
              <br />
            </div>
          </div>
          <div>
            
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Image
            className="feature-img feature-img1 mobileview1 "
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
