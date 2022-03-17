import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Projets = () => {
  return (
    <div className="Projets mt-5">
      <div className="typewriter-container">
        <div className="typewriter">
          <h1 className="text-decoration-underline">Mes Projets</h1>
        </div>
      </div>
      <Row>
        <Col sm={12}>
          <div>
            <img
              className="img-fluid"
              src="./img/pp_site.png"
              alt="projet 1"
            ></img>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Projets;
