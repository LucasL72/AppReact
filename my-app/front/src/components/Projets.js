import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GitHubIcon from "@mui/icons-material/GitHub";
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
          <div className="ImgHover">
            <img
              className="img-fluid image"
              src="./img/pp_site.png"
              alt="projet 1"
            ></img>
            <div className="middle">
              <div className="content">
                <p className="fs-3">Mon projet handleBars</p>
                <a href="https://github.com/LucasL72/projetnjs">
                  <GitHubIcon sx={{ fontSize: 70 }} />
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Projets;
