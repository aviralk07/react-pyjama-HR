import React, { useEffect, useRef } from "react";
import "./style.css"; // Your local CSS file
import Button from "react-bootstrap/Button";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link as RouterLink} from "react-router-dom"; 
gsap.registerPlugin(ScrollTrigger);

const Home = (props) => {
  const centerContentRef = useRef(null);

  useEffect(() => {
    // Set up GSAP animations
    gsap.fromTo(
      centerContentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: centerContentRef.current,
          start: "top 80%", // Adjust the start position based on your needs
          end: "bottom 20%", // Adjust the end position based on your needs
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const imageUrl = "https://framerusercontent.com/images/bvMzcZ9J1ANjHykc33EUZkGBIo.png";
  const imageUrl1 = "https://framerusercontent.com/images/a9mItBNRw0d4N0YGQwZNxLjhZCM.png";
  const imageUrl2 = "https://framerusercontent.com/images/fi6NGVWAEljjJ3AqqLnEBTBT210.png";
  const imageUrl3 = "https://framerusercontent.com/images/3pcnpg4swAoyEsARlaFxst637Mw.png";
  const imageUrl4 = "https://framerusercontent.com/images/8Sm3a6Z6h2ocBudUHPHYCh8zp8w.png";

  return (
    <div ref={centerContentRef} className="center-content">
      <p className="center-content-pp">
        SOURCE | MANAGE | EVALUATE | COLLABORATE
      </p>
      <h2>
        Hiring made so easy, you can do it in your <span> pyjamas </span>
      </h2>
      <div className="center-content-p">
        <p>
          Designed to help businesses source, evaluate, and hire the ideal
          candidate, faster.
        </p>
        <div>
        
          <RouterLink to="/signup">
                <Button className="btn1 btn1-1" onClick={props.signupButtonClick}>
                  {props.signupText}
                  <span className="arrow-icon-hidden">
                    <ArrowCircleRight size={30} color="#FFFFFF" weight="fill" />
                  </span>
                </Button>
              </RouterLink>
              <button className="btn-demo">Get a Demo</button>
        </div>
      </div>
      <div className="img-logo">
        <img src={imageUrl} alt="" className="img-logo-image" />
        <img src={imageUrl1} alt="" className="img-logo-image" />
        <img src={imageUrl2} alt="" className="img-logo-image" />
        <img src={imageUrl3} alt="" className="img-logo-image" />
        <img src={imageUrl4} alt="" className="img-logo-image" />
      </div>
    </div>
  );
};

export default Home;

