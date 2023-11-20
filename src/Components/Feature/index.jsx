import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const Features = ({ avatarSrc, username, bio }) => {
  const featureRef = useRef(null);

  useEffect(() => {
    // Set up GSAP animations for the Features component
        // Check if the screen width is greater than 767 pixels (not a mobile device)
        if (window.innerWidth > 767) {
          // Set up GSAP animations for the Features component
          gsap.fromTo(
            featureRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 2,
              scrollTrigger: {
                trigger: featureRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }, []);
      

  return (
    <Container className="container" id="Feature" ref={featureRef}>
      <Row className="row1">
        <h1 className="text-h1">
          Why  4000+ companies around the world <span> choose PyjamaHR </span>
        </h1>
        <Col xs={12} md={6}>
          <Image
            className="feature-img"
            src="https://framerusercontent.com/images/mZnZCFIhnrCz9PRyrFybYS6i19M.png?scale-down-to=1024"
            alt="Horizon"
            width={500}
            height={500}
          />
        </Col>
        <Col xs={12} md={6} className="col1">
          <button className="btn3">Source</button>
          <h4>Source top talent, with ease.</h4>
          <p>
            "Thanks to PyjamaHR, I can easily{" "}
            <span> post my job on multiple job boards,</span> and the platform
            seamlessly consolidated all candidate applications in a single
            place. Plus, the option to create a{" "}
            <span> dedicated career page </span> has helped improve our brand
            image."
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

export default Features;
