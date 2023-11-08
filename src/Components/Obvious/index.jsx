import React from "react";
import "./style.css"; // You can define your CSS styles in this file.

function Obvious() {
  return (
    <div className="container-2">
      <div className="row">
        <h1 className="obv-h1">More reasons why <span> we are the obvious choice</span></h1>
        <div className="box">
          <div className="content">
            <button className="icon-button">
              <img
                src="https://framerusercontent.com/images/zqNAWAxKIgDgcqflAgMmLFQkLL0.png"
                alt=""
                width={35}
                className="icon-img"
              />
            </button>
            <h5>Top-tier partners</h5>
            <p>
              Integrate with LinkedIn, Google and 50+ other apps and tools for
              enhanced productivity.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <button className="icon-button">
              <img
                src="https://framerusercontent.com/images/hB1Wgprkm10Cp9JouydDfgY.png"
                alt=""
                width={35}
                className="icon-img"
              />
            </button>
            <h5>Quick, global support</h5>
            <p>
              Reach our support team via phone or chat. Our average response
              time is under 5 minutes!
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <button className="icon-button">
              <img
                src="https://framerusercontent.com/images/thwKWwmTF1mxcB4beHAl7Zsptk.png"
                alt=""
                width={35}
                className="icon-img"
              />
            </button>
            <h5>Trusted security</h5>
            <p>
              Sleep soundly, knowing your data is always safe and accessible.
              We’re SOC2-certified.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="box1">
          <div className="content1">
            <button className="icon-button">
              <img
                src="https://framerusercontent.com/images/H1o5ngJIPV63NPe39SjlxRxHE.png"
                alt=""
                width={35}
                className="icon-img"
              />
            </button>
            <h5>Expert advice</h5>
            <p>
              Make the right hiring decisions with help from 1000s of hiring
              templates and tutorials.
            </p>
          </div>
        </div>
        <div className="box1">
          <div className="content1">
            <button className="icon-button">
              <img
                src="https://framerusercontent.com/images/hMqdpr0oZD99ZZxqHZLrZYpX4Nk.png"
                alt=""
                width={35}
                className="icon-img"
              />
            </button>
            <h5>Assisted onboarding</h5>
            <p>
              Get up and running in days, not months — PyjamaHR is just that
              simple to use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Obvious;
