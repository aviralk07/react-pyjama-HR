import React, { useEffect, useRef } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PremiumAddOns = (props) => {
  const premiumAddOnsRef = useRef(null);

  useEffect(() => {
    // Set up GSAP animations for the PremiumAddOns component
    gsap.fromTo(
      premiumAddOnsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: premiumAddOnsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="container2" ref={premiumAddOnsRef}>
      <div className="premium">
        <img
          className="premium-img"
          src="https://framerusercontent.com/images/nDTohinBuF4ENtGVGDTe1AwI9c.png?scale-down-to=512"
          alt="Alternative Text"
          width={100}
          height={200}
        />
        <button className="pre-btn">
          <span style={{ fontSize: "1.4em" }}>&#128293;</span> PREMIUM ADD-ONS
        </button>

        <h2>
          Looking to close positions <span> faster? </span>{" "}
        </h2>
        <p>
          Leverage add-ons like job boosts and tests to accelerate and improve
          the quality of your hiring.
        </p>
        <Button className="btn1 ">
          {props.signupText}{" "}
          <span className="arrow-icon-hidden">
            <ArrowCircleRight size={30} color="#FFFFFF" weight="fill" />
          </span>
        </Button>
        <img
          src="https://framerusercontent.com/images/yEBmxPueDuSgi4m05KKrUZNFj8.png?scale-down-to=512"
          alt="Alternative Text"
          width={150}
          height={200}
          className="premium-img1"
        />
      </div>
    </div>
  );
};

export default PremiumAddOns;
