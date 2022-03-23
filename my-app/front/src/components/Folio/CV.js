import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Placeholder from "react-bootstrap/Placeholder";

const CV = () => {
  return (
    <div>
      <Col md={12} className="mt-3">
        <Card border="success" bg="dark" text="light">
          <Card.Header className="text-center text-success h3">
            Diplômes et formations
          </Card.Header>
          <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12}>
        <Card border="success" bg="dark" text="light" className=" mt-3">
          <Card.Header className="text-center text-success h3">
            Expériences professionnelles
          </Card.Header>
          <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CV;
