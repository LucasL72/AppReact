import { useState } from "react";
import EditArticle from "./EditArticle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteArticle } from "../store/actions/ArticlesActions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const CardArticle = (props) => {
  const { item } = props;
  const [editToggle, setEditToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    dispatch(deleteArticle(id));
  };

  const toArticleID = async (id) => {
    console.log("go to article id");
    navigate("/" + id, { state: { id, item } });
  };

  const toggler = (bool) => setEditToggle(bool);

  return (
    <Col sm={4} className="g-4">
      <Card key={item.id}>
        <Card.Img variant="top" src="./img/creative1.jpg" />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button
            cla
            variant="outline-dark"
            type="submit"
            onClick={() => toArticleID(item.id)}
          >
            Submit
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
          <Button
            cla
            variant="outline-danger"
            type="submit"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </Button>
          <Button
            cla
            variant="outline-success"
            type="submit"
            onClick={() => setEditToggle(!editToggle)}
          >
            Edit
          </Button>
        </Card.Footer>
        {editToggle ? (
          <EditArticle item={item} toggler={toggler} />
        ) : (
          <p>edit: false</p>
        )}
      </Card>
    </Col>
  );
};

export default CardArticle;
