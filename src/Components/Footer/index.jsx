import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
function Footer() {
  return (
    <Container className="con-4-1">
      <Row>
        <Col className="col-1">
          <img
            src="https://framerusercontent.com/images/4AkMLZfx9MJDHV7t8zDWEs7N0M.png?scale-down-to=512"
            alt=""
            width={110}
          />
        </Col>
        <Col className="col-1">
          <img
            src="https://framerusercontent.com/images/yVQYFFvbwi3WVh4NMS3TO8m565o.png?scale-down-to=512"
            alt=""
            width={90}
          />
        </Col>
        <Col className="col-1">
          <img
            src="https://www.vinculumgroup.com/wp-content/uploads/2023/09/OrderManagement_HighPerformer_HighPerformer.png"
            alt=""
            width={90}
          />
        </Col>
        <Col className="col-1">
          <img
            src="https://assets-global.website-files.com/64a7d8721137222a6c06b329/64b4f91f126c2cc7c6e419f0_Chatbots_HighPerformer_AsiaPacific_HighPerformer.svg"
            alt=""
            width={90}
          />
        </Col>
        <Col className="col-1">
          <img
            src="https://framerusercontent.com/images/3uncZ6qlApFs2y60O8KBbOhdg.svg"
            alt=""
            width={110}
            className="img-log1"
          />
        </Col>
        <Col className="col-1">
          <img
            src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1233ef954d868794f19ce75837789fe8/g2.png"
            alt=""
            width={90}
          />
        </Col>
        <Col className="col-1">
          <img
            src="https://approval.studio/wp-content/uploads/2021/11/Ziflow-Capterra-Review.png"
            alt=""
            width={110}
            className="img-log1"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src="https://framerusercontent.com/images/gCQST8ZfQiMg0wKIdcBAZLeYx0U.png?scale-down-to=512"
            alt=""
            width={180}
            className="img-logo2"
          />
          <h4 className="footer-h4">
            Manage applicants, post to job boards, schedule & conduct interviews
            and hire top talent - One tool to do it all.
          </h4>
          <img
            src="https://framerusercontent.com/images/iVj4ZHOfqoBDGVH5H9r60oQHuBg.png"
            alt=""
            width={60}
            className="img-logo2"
          />
        </Col>

        <Col>
          <Row>
            <Col>
              <div className="col-p">
                <p>Features</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Pricing</p>
              </div>
            </Col>
            <Col>
              <div className="col-p1">
                <p>Linkedin </p>
                <p>X (Twitter) </p>
                <p>Terms of service </p>
                <p>Privacy policy </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <br /><br /><br />
      <div className="grey-horizontal-line"></div>
      <div className="inc"> &copy;2023 Aurelium, Inc.</div>
    </Container>
  );
}

export default Footer;
