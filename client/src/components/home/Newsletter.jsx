import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Newsletter() {
  return (
    <section className="bg-dark py-5">
      <Container>
        <Row>
          <Col className="text-center text-white">
            <h2>Sign Up For Newsletter</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              aliquid odit eligendi tempora rem laborum vero ipsum dolor enim a.
            </p>
            <Form>
              <Form.Row className="justify-content-center">
                <Form.Group>
                  <Form.Control placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mx-3">
                  <Form.Control placeholder="Enter Email" />
                </Form.Group>
                <Form.Group>
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Newsletter;
