import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactPro = () => {
  return (
    <div className="ContactPro mt-5">
      <div className="typewriter-container">
        <div className="typewriter">
          <h1 className="text-decoration-underline">Me contacter</h1>
        </div>
      </div>
      <Row>
        <Col className="text-center" sm={4}>
          <GitHubIcon sx={{ fontSize: 70 }} />
        </Col>
        <Col className="text-center" sm={4}>
          {" "}
          <LinkedInIcon sx={{ fontSize: 70 }} />
        </Col>
        <Col sm={4}></Col>
      </Row>
    </div>
  );
};

export default ContactPro;
