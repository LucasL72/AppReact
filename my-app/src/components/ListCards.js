import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ListCards = (props) => {
  const { list } = props;
  return (
    <div ClassName="listCard">
      <h2> List Cards</h2>
      <Row xs={2} md={3} className="g-4">
        {list.map((item) => {
          return (  
                <Col sm={4} className="g-4">
                  <Card key= {item.id } >
                    <Card.Img variant="top" src="./img/licorn.jpeg" />
                    <Card.Body>
                      <Card.Title>{ item.title }</Card.Title>
                      <Card.Text>
                        { item.content }
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
                </Col>
          );
        })}
      </Row>
     
    </div>
  )
}

export default ListCards