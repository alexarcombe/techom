import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export default function Computer() {
  return (
    <Container>
      <Row className="py-3">
        <Col
          md={6}
          className="d-flex flex-column text-center justify-content-center"
        >
          <h2>MacBook Pro</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            omnis quis ut temporibus excepturi sed neque dolorem veniam? Sequi,
            modi!
          </p>
          <Button variant="outline-info">Learn More</Button>
        </Col>
        <Col md={6}>
          <Image src="/images/laptop.png" fluid />
        </Col>
      </Row>
    </Container>
  );
}
