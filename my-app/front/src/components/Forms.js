import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Forms = () => {
    return (
        <>
            <h2 className="text-center">Mon formulaire</h2>
            <Form>
                <Row>
                    <Col sm={12}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>title</Form.Label>
                            <Form.Control type="password" placeholder="title" />
                        </Form.Group>
                    </Col>
                </Row>
                <Col sm={12}>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Example description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Col>

                <Col sm={12}>
                    <div className="text-center">
                        <Button cla  variant="outline-dark" type="submit">
                            Submit
                        </Button>
                    </div>
                </Col>

            </Form>
            
        </>
    );
};

export default Forms;