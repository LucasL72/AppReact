import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const QuiSuisje = () => {
  return (
    <div className="Qui mt-5">
      <div className="typewriter-container">
        <div className="typewriter">
          <h1 className=" text-decoration-underline">
            Qui suis-je?
          </h1>
        </div>
      </div>
      <Row>
        <Col sm={6}>
          <div className="ImgProf">
            <img
              className="rounded-circle ImgProfile"
              src="./img/licorn.jpeg"
              alt="propriétaire"
            ></img>
          </div>
        </Col>
        <Col sm={6}>
          <p className="text-justify text-center">
            Je suis développeur web Junior
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tempor laoreet lacus eu elementum. Nulla id finibus tellus. Nulla
            ornare mollis eros, vel gravida ligula efficitur ac. Curabitur
            tempus vitae massa non lobortis. Vestibulum a egestas ex, id
            ullamcorper dolor.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default QuiSuisje;
