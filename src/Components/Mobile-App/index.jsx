import React, { useState } from "react";
import "./style.css";

const MobileApp = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  const handleImageHover = (e) => {
    const imageRect = e.target.getBoundingClientRect();
    const x = e.clientX - imageRect.left;
    const y = e.clientY - imageRect.top;
    setDotPosition({ x, y });
  };

  const handleImageEnter = () => {
    setIsHovered(true);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container2">
      <div className="premium">
        {props.buttonProp}

        <h2>
          Now in your <span>pyjama</span> pockets too!{" "}
        </h2>
        <p>
          Always stay in the loop with the PyjamaHR mobile app, available on
          Google Play Store and Apple App Store
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.pyjamahr.pyjamahr&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt=""
            width={170}
            height={200}
            className="google-play"
          />
        </a>

        <div
          className="premium-img2"
          onMouseEnter={handleImageEnter}
          onMouseLeave={handleImageLeave}
        >
          <img
            src="https://framerusercontent.com/images/Skp2F5TR1lcTXjaw1Hsvdfh0PE.png"
            alt="Alternative Text"
            width={230}
            height={280}
            onMouseMove={handleImageHover}
          />
          {isHovered && dotPosition.x !== 0 && dotPosition.y !== 0 && (
            <div
              className="blue-dot"
              style={{
                left: `${dotPosition.x}px`,
                top: `${dotPosition.y}px`,
              }}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
