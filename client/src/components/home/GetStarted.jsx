import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function GetStarted() {
  return (
    <section id="get-started">
      <div className="dark-overlay">
        <Container>
          <Row className="text-center text-white justify-content-center">
            <Col className="pt-5">
              <h2 className="display-4">Are You Ready To Get Started?</h2>
              <p className="d-none d-lg-block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, tempore? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptates, similique.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default GetStarted;
