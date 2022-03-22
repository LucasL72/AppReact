import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Col from "react-bootstrap/Col";
import EmailIcon from '@mui/icons-material/Email';

const ContactPro = () => {
  return (
    <div className="ContactPro mt-5">
      <div className="typewriter-container">
        <div className="typewriter">
          <h1 className="text-decoration-underline">Me contacter</h1>
        </div>
      </div>
      <Col className="text-center" sm={12}>
        <a href="https://github.com/LucasL72">
          <GitHubIcon sx={{ fontSize: 70 }} />
        </a>
        <a href="https://www.linkedin.com/in/lucas-ledoux-244b0a175/">
          <LinkedInIcon sx={{ fontSize: 70 }} />
        </a>
        <a href="mailto:lucasj.ledoux@gmail.com"><EmailIcon sx={{ fontSize: 70 }} /></a>
      </Col>
    </div>
  );
};

export default ContactPro;
