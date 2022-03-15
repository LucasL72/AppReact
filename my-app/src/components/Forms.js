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
                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                 We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="password" placeholder="Name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Col sm={12}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
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