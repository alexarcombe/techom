import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';

function Questions() {
  return (
    <section className="bg-dark text-white">
      <Container>
        <Row className="text-center pt-3 border-bottom-2">
          <Col>
            <h3>Frequently Asked Questions</h3>
          </Col>
        </Row>
        <Row className="py-4">
          <Col md="6">
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                  Question One
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores atque expedita deserunt! Optio voluptatibus
                    sapiente, dolores fuga quisquam illum, a, molestias iure
                    nostrum pariatur deleniti ipsa eum animi veniam quidem
                    incidunt accusantium atque molestiae. Enim corrupti ipsa
                    accusamus laboriosam nobis cumque non ratione, culpa
                    blanditiis temporibus. Debitis, odio. Corrupti, dolore.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                  Question Two
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores atque expedita deserunt! Optio voluptatibus
                    sapiente, dolores fuga quisquam illum, a, molestias iure
                    nostrum pariatur deleniti ipsa eum animi veniam quidem
                    incidunt accusantium atque molestiae. Enim corrupti ipsa
                    accusamus laboriosam nobis cumque non ratione, culpa
                    blanditiis temporibus. Debitis, odio. Corrupti, dolore.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                  Question Three
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores atque expedita deserunt! Optio voluptatibus
                    sapiente, dolores fuga quisquam illum, a, molestias iure
                    nostrum pariatur deleniti ipsa eum animi veniam quidem
                    incidunt accusantium atque molestiae. Enim corrupti ipsa
                    accusamus laboriosam nobis cumque non ratione, culpa
                    blanditiis temporibus. Debitis, odio. Corrupti, dolore.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col md="6">
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                  Question Four
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores atque expedita deserunt! Optio voluptatibus
                    sapiente, dolores fuga quisquam illum, a, molestias iure
                    nostrum pariatur deleniti ipsa eum animi veniam quidem
                    incidunt accusantium atque molestiae. Enim corrupti ipsa
                    accusamus laboriosam nobis cumque non ratione, culpa
                    blanditiis temporibus. Debitis, odio. Corrupti, dolore.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
                  Question Five
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores atque expedita deserunt! Optio voluptatibus
                    sapiente, dolores fuga quisquam illum, a, molestias iure
                    nostrum pariatur deleniti ipsa eum animi veniam quidem
                    incidunt accusantium atque molestiae. Enim corrupti ipsa
                    accusamus laboriosam nobis cumque non ratione, culpa
                    blanditiis temporibus. Debitis, odio. Corrupti, dolore.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
                  Question Six
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores atque expedita deserunt! Optio voluptatibus
                    sapiente, dolores fuga quisquam illum, a, molestias iure
                    nostrum pariatur deleniti ipsa eum animi veniam quidem
                    incidunt accusantium atque molestiae. Enim corrupti ipsa
                    accusamus laboriosam nobis cumque non ratione, culpa
                    blanditiis temporibus. Debitis, odio. Corrupti, dolore.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Questions;
