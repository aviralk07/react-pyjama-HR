
import React  from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css"; // Replace with your actual CSS file
import Avatar from "react-avatar";
import { ArrowCircleRight } from "@phosphor-icons/react";
function HappyUser(props) {
  



  return (
    <Container className="happy-con" >
      <Row className="row-with-border">
        <Col className="happyuser">
          <button className="btn3">
            <span style={{ fontSize: "17px" }}>&#128075;</span> DON'T MISS OUT
          </button>

          <h2>
            You've never made a hire this fast before. <span> Really.</span>
          </h2>
          <button className="btn1 ha-btn">
            {props.signupText}
            <span className="arrow-icon-hidden">
              <ArrowCircleRight size={30} color="#FFFFFF" weight="fill" />
            </span>
          </button>
        </Col>
        <Col className="happy-u">
          <h5>
            <span>4000+</span> happy users
          </h5>
          <Row className="row-hap">
            <Avatar
              className="row-avt"
              text="Dunzo"
              round="50px"
              size={70}
              color="lightgrey"
            />
            <Avatar
              className="row-avt"
              text="Dunzo"
              round="50px"
              size={70}
              color="lightgrey"
            />
            <Avatar
              className="row-avt"
              text="Dunzo"
              round="50px"
              size={70}
              color="lightgrey"
            />
            <Avatar
              className="row-avt"
              text="Dunzo"
              round="50px"
              size={70}
              color="lightgrey"
            />
          </Row>
          <Row className="row-hap">
            <Avatar
              className="row-avt1"
              text="Dunzo"
              round="50px"
              size={70}
              color="lightgrey"
            />
            <Avatar
              className="row-avt1"
              text="Dunzo"
              round="50px"
              size={70}
              color="lightgrey"
            />
            <Avatar
              className="row-avt1"
              text="Dunzo"
              round="50px"
              size={70}
              color="lightgrey"
            />
            <Avatar
              className="row-avt1"
              text="Dunzo"
              round="50px"
              size={70}
              color="lightgrey"
            />
            <Avatar
              className="row-avt1"
              text="Dunzo"
              round="50px"
              size={70}
              color="lightgrey"
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default HappyUser;
