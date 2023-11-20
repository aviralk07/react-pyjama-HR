import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css"; // Import the external CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidCompanyName, setIsValidCompanyName] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const REQUIRED_DIGITS = 12;
  const [termsChecked, setTermsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // const responseGoogle = (response) => {
  //   console.log(response);
  // };

  const handlePhoneChange = (value) => {
    const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
    setPhoneNumber(`+${numericValue}`); // Ensure international format

    setIsValidPhone(numericValue.length === REQUIRED_DIGITS);
  };

  const validateEmail = (value) => {
    setEmail(value);

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the regex
    setIsValidEmail(emailRegex.test(value));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (value) => {
    setPassword(value);
    const isValid = value.length >= 8;
    setIsValidPassword(isValid);
  };

  const validateCompanyName = (value) => {
    setCompanyName(value);

    // Your company name validation logic
    const isValid = value.trim().length > 3;
    setIsValidCompanyName(isValid);
  };

  const handleSubmit = () => {
    // Validation flags
    const isEmailValid = isValidEmail && email.trim() !== "";
    const isPasswordValid = isValidPassword && password.trim() !== "";
    const isCompanyNameValid = isValidCompanyName && companyName.trim() !== "";
    const isPhoneValid = isValidPhone && phoneNumber.trim() !== "";

    // Update validation state
    setIsValidEmail(isEmailValid);
    setIsValidPassword(isPasswordValid);
    setIsValidCompanyName(isCompanyNameValid);
    setIsValidPhone(isPhoneValid);

    // Check if all fields are valid
    if (
      isEmailValid &&
      isPasswordValid &&
      isCompanyNameValid &&
      isPhoneValid &&
      termsChecked
    ) {
      // Perform signup logic
      // For example, you can submit the form or navigate to the next step
      console.log("Form submitted!");
    }
  };

  // Check all validation states

  return (
    <Container className="container-center1 signUP">
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
          <div
            className={`login-container sign-container ${
              (!isValidEmail ||
                !isValidPassword ||
                !isValidCompanyName ||
                !isValidPhone) &&
              "error-container"
            }`}
          >
            {/* Google Login Button */}
            {/* <GoogleLogin
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
            </GoogleLogin> */}
            <div className="login-options-container">
              <hr />
              <span className="login-option-text">
                Or, Sign up with your email
              </span>
              <hr />
            </div>
            <div className="login-form">
              <div>
                <label
                  htmlFor="username1"
                  id="username1"
                  className="username1-1"
                >
                  Work email id <span> *</span>
                </label>
                <br />
                <input
                  type="email"
                  className={`username1 ${isValidEmail ? "" : "invalid"}`}
                  name="username1"
                  onChange={(e) => {
                    validateEmail(e.target.value);
                    // Reset error message on change
                  }}
                />
                {!isValidEmail && (
                  <p className="error-message1">
                    {" "}
                    Please enter a valid email address.
                  </p>
                )}
              </div>

              <div className="password-con">
                <label htmlFor="username2" id="username2">
                  Password <span> *</span>
                </label>{" "}
                <br />
                <div className="password-container">
  <input
    type={showPassword ? "text" : "password"}
    className={`username2 password-con1 ${
      isValidPassword ? "" : "invalid"
    }`}
    name="username2"
    value={password}
    onChange={(e) => {
      validatePassword(e.target.value);
      // Reset error message on change
    }}
  />
  <div className="fa-btn1-container">
    <button
      className="fa-btn1 fa-btn11"
      type="button"
      onClick={togglePasswordVisibility}
    >
      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
    </button>
  </div>
</div>
{!isValidPassword && (
  <p className="error-message1">
    Please enter a valid password.
  </p>
)}
</div>

              <br />
              <div className="company-con">
                <label htmlFor="username2" id="username2">
                  Company Name <span> *</span>
                </label>{" "}
                <br />
                <input
                  type="text"
                  className={`username2 ${isValidCompanyName ? "" : "invalid"}`}
                  name="username2"
                  onChange={(e) => {
                    validateCompanyName(e.target.value);
                    // Reset error message on change
                  }}
                />
                {!isValidCompanyName && (
                  <p className="error-message1">
                    Please enter a valid company name.
                  </p>
                )}
              </div>

              <div>
                <label id="username2" htmlFor="phone">
                  Phone Number <span> *</span>
                </label>
                <div className="phone-input-container">
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className={`my-phone-input ${
                      isValidPhone ? "" : "invalid"
                    }`} // Assign a className
                  />
                  {!isValidPhone && (
                    <p className="error-message erro-mess err-sign">
                      Please enter a valid phone number.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              {/* Your other signup content goes here */}
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  className="check1 check11"
                  type="checkbox"
                  label={
                    <span>
                      I agree to the{" "}
                      <span style={{ color: "#5d78ff" }}>
                        Terms & Conditions
                      </span>
                    </span>
                  }
                  id="termsCheckbox"
                  onChange={() => setTermsChecked(!termsChecked)}
                  checked={termsChecked}
                />
                {!termsChecked && (
                  <p className="error-message1">
                    Please agree to the Terms & Conditions.
                  </p>
                )}
              </Form.Group>
            </div>
            <button
              className={`login-button sign-up-btn ${
                termsChecked ? "active" : ""
              }`}
              disabled={!termsChecked}
              onClick={handleSubmit}
            >
              Sign up
            </button>
           
            <p className="login-para sign-para">
              You can edit your job once you signup to PyjamaHR
            </p>
          </div>
        </Col>
      </Row>
      <hr />
      <div className="logo-container">
      <Row>
        <Col>
          <img
            src="https://app.pyjamahr.com/_next/static/image/public/images/sugar_logo.e610d15f3f7bbf6f677184e09147051c.svg"
            alt=""
            className="logo-login logo-sign"
          />
        </Col>
        <Col>
          <img
            src="https://app.pyjamahr.com/_next/static/image/public/images/tartan_logo.aedad9ef7634f1c0692eab5149af2dfc.svg"
            alt=""
            className="logo-login logo-sign"
          />
        </Col>
        <Col>
          <img
            src="https://app.pyjamahr.com/_next/static/image/public/images/market_plus_logo.5cd8f577a87a291bbbe3259522840875.svg"
            alt=""
            className="logo-login logo-sign"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src="https://app.pyjamahr.com/_next/static/image/public/images/volopay_logo.a7cca95b18999fcf68f6f32a568bab8a.svg"
            alt=""
            className="logo-login logo-sign"
          />
        </Col>
        <Col>
          <img
            src="https://app.pyjamahr.com/_next/static/image/public/images/masai_logo.730c64820a00366bdfd6a5b95b1cbaff.svg"
            alt=""
            className="logo-login logo-sign"
          />
        </Col>
        <Col>
          <img
            src="https://app.pyjamahr.com/_next/static/image/public/images/orange_health_logo.9e39bb968aa793aaaeaed34b7895ace2.svg"
            alt=""
            className="logo-login logo-login1 logo-sign"
          />
        </Col>
      </Row>
      </div>
    </Container>
  );
};

export default Signup;
