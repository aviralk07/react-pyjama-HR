import React from "react";
import "./style.css";

const MobileApp = (props) => {
  return (
    <div className="container2">
      <div className="premium">
        <button className="pre-btn mbn-btn">
          <span style={{ fontSize: "17px" }}> 🚀 </span>
          MOBILE APP
        </button>

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
