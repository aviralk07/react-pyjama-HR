import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import { ArrowCircleRight } from "@phosphor-icons/react";
const MobileApp = (props) => {
  return (
    <div className="container2">
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
            {/* <BsArrowRightCircleFill /> */}
            <ArrowCircleRight size={30} color="#FFFFFF" weight="fill" />
          </span>{" "}
        </Button>
        <img
          src="https://framerusercontent.com/images/Skp2F5TR1lcTXjaw1Hsvdfh0PE.png"
          alt="Alternative Text"
          width={230}
          height={280}
          className="premium-img1 premium-img2 "
        />
      </div>
    </div>
  );
};

export default MobileApp;
