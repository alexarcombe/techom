import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-black text-center text-white py-4">
      <Container>
        <Row>
          <Col>
            <p>Copyright © {new Date().getFullYear()} Techom</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
