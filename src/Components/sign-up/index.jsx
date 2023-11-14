import React from "react";

import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import "./style.css"; // Import the external CSS file

const Signup = () => {
  
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <Container className="container-center">
      <br />
      <br />
      <br />
      <Row>
        <Col>
          <h1 className="main-heading">
            Recruitment software for companies that want to scale faster
          </h1>
          <h5 className="sub-heading">Use our ATS to</h5>
          <ul className="list-item-heading">
            <li className="list-item">
              Post jobs on 50+ job boards in one click
            </li>
            <li className="list-item">
              Keep track of every candidate with custom pipelines
            </li>
            <li className="list-item">
              Take data-driven hiring decisions with recruitment reports
            </li>
            <li className="list-item">
              Schedule interviews, collaborate with team members, manage
              employee referrals, AI-powered assessments and more...!!
            </li>
          </ul>
          <h6 className="heading-h6">Trusted by 4000+ businesses</h6>
          <hr id="hr-login" />
        </Col>

        <Col>
          <div className="login-container sign-container">
            {/* Google Login Button */}
            <GoogleLogin
              className="google-login1"
              clientId="YOUR_GOOGLE_CLIENT_ID"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ marginBottom: "60px", marginLeft: "70px" }}>
                Log in with Google
              </span>
            </GoogleLogin>
            <div className="login-options-container">
              <hr />
              <span className="login-option-text">
                Or, Sign up with your email
              </span>
              <hr />
            </div>
            <div className="login-form">
              <div>
                <label htmlFor="username1" id="username1">
                  Work email id <span> *</span>
                </label>
                <br />
                <input type="email" className="username1" name="username1" />
              </div>

              <div>
                <label htmlFor="username2" id="username2">
                  Password <span> *</span>
                </label>{" "}
                <br />
                <input type="password" className="username2" name="username2" />
              </div>
              <div>
                <label htmlFor="username2" id="username2">
                  Company Name <span> *</span>
                </label>{" "}
                <br />
                <input type="password" className="username2" name="username2" />
              </div>
              <div>
                <label htmlFor="username2" id="username2">

                  Phone Number <span> *</span>
                  <input type="text" />
                </label>{" "}
                <br />
               
              </div>
            </div>
            <div>
              {/* Your other signup content goes here */}

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label={
                    <span>
                      I agree to the{" "}
                      <span style={{ color: "#5d78ff" }}>
                        Terms & Conditions
                      </span>
                    </span>
                  }
                />
              </Form.Group>
            </div>
            <button className="login-button">Sign up</button>
            <p className="login-para">
              You can edit your job once you signup to PyjamaHR
            </p>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <img
            src="https://app.pyjamahr.com/_next/static/image/public/images/sugar_logo.e610d15f3f7bbf6f677184e09147051c.svg"
            alt=""
            className="logo-login"
          />
        </Col>
        <Col>
          <img
            src="https://app.pyjamahr.com/_next/static/image/public/images/tartan_logo.aedad9ef7634f1c0692eab5149af2dfc.svg"
            alt=""
            className="logo-login"
          />
        </Col>
        <Col>
          <img
            src="https://app.pyjamahr.com/_next/static/image/public/images/market_plus_logo.5cd8f577a87a291bbbe3259522840875.svg"
            alt=""
            className="logo-login"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src="https://app.pyjamahr.com/_next/static/image/public/images/volopay_logo.a7cca95b18999fcf68f6f32a568bab8a.svg"
            alt=""
            className="logo-login"
          />
        </Col>
        <Col>
          <img
            src="https://app.pyjamahr.com/_next/static/image/public/images/masai_logo.730c64820a00366bdfd6a5b95b1cbaff.svg"
            alt=""
            className="logo-login"
          />
        </Col>
        <Col>
          <img
            src="https://app.pyjamahr.com/_next/static/image/public/images/orange_health_logo.9e39bb968aa793aaaeaed34b7895ace2.svg"
            alt=""
            className="logo-login logo-login1"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
