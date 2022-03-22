import React from "react";
import Button from "react-bootstrap/Button";
import CV from "./CV";

const Parcours = () => {
  return (
    <div className="mt-5">
      <div className="typewriter-container">
        <div className="typewriter">
          <h1 className=" text-decoration-underline">Mon Parcours?</h1>
        </div>
      </div>
      <CV />
      <div className="text-center mt-3">
        <Button
          cla
          variant="outline-dark"
          target="_blank"
          href="../CV_2022_Lucas_Ledoux.pdf"
          download
        >
          Mon CV
        </Button>
      </div>
    </div>
  );
};

export default Parcours;
