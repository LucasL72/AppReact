import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'

const Header = (props) => {
  const { list } = props;
  return (
    <div ClassName="listCard">
      <h2 className='text-center'> List Cards</h2>
      <Row xs={2} md={3} className="g-4">
        {list.map((item) => {
          return (  
                <Col sm={4} className="g-4">
                  <Card key= {item.id } >
                    <Card.Img variant="top" src="./img/creative1.jpg" />
                    <Card.Body>
                      <Card.Title>{ item.title }</Card.Title>
                      <Card.Text>
                        { item.content }
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                      <Accordion defaultActiveKey="0">
                           <Accordion.Item eventKey="0">
                            <Accordion.Header> { item.titleaccord1 }</Accordion.Header>
                               <Accordion.Body>
                                { item.accord1 }
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>{ item.titleaccord2 }</Accordion.Header>
                              <Accordion.Body>
                              { item.accord2 }
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                    </Card.Footer>
                  </Card>
                </Col>
          );
        })}
      </Row>
     
    </div>
  )
}

export default Header