import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const Collaborate = ({ avatarSrc, username, bio }) => {
  const collaborateRef = useRef(null);

  useEffect(() => {
    // Set up GSAP animations for the Collaborate component
    gsap.fromTo(
      collaborateRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: collaborateRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Container className="container" id="collaborate" ref={collaborateRef}>
      <Row className="row1 my4">
        <Col xs={12} md={6} className="col1 col2 mobile-colla collab1">
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
            <div className="user-details collab3">
              <h4>{username}</h4>
              <p>{bio}</p>
              <br />
            </div>
          </div>
          <div>
            
          </div>
        </Col>
        <Col xs={12} md={6} className="collab2">
          <Image
            className="feature-img feature-img1 collab2-1  "
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
