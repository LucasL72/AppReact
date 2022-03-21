import CardArticle from "./CardArticle";
import Row from "react-bootstrap/Row";


const ListArticle = (props) => {
  const { list } = props;

  return (
    <div className="listCard">
      <h2 className="text-center"> List Cards</h2>
      <Row xs={2} md={3} className="g-4">
        {list.length > 0 &&
          list.map((item) => {
            return <CardArticle key={item.id} item={item} />;
          })}
      </Row>
    </div>
  );
};

export default ListArticle;
