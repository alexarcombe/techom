import React from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';

function Info() {
  return (
    <Container>
      <Row className="my-3">
        <Col lg="4">
          <Card className="p-3">
            <Card.Body>
              <h3>Get In Touch</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                exercitationem!
              </p>
              <h3>Adress</h3>
              <p>74 Taharoto Road, Takapuna, Auckland 0622</p>
              <h3>Email</h3>
              <p>techom@gmail.com</p>
              <h3>Phone</h3>
              <p>027 357 4541</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="8">
          <Card className="text-center p-3">
            <Card.Body>
              <h3>Send A Message</h3>
              <hr />
              <Form>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Control placeholder="Firstname" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Control placeholder="Lastname" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Control placeholder="Email" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Control placeholder="Phone" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Control as="textarea" rows="5" placeholder="Message" />
                </Form.Group>
                <Button variant="primary" block type="submit">
                  Send
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Info;
