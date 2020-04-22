import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Plans() {
  const plans = [
    { id: 1, title: 'Service Plan One', cost: 29.99 },
    { id: 2, title: 'Service Plan One', cost: 59.99 },
    { id: 3, title: 'Service Plan One', cost: 79.99 },
  ];

  const content = plans.map((plan) => {
    return (
      <Col key={plan.id} md="4">
        <Card>
          <Card.Header className="bg-dark text-white">
            <Card.Title>{plan.title}</Card.Title>
          </Card.Header>
          <Card.Body>
            <h3>${plan.cost}/Month</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              reiciendis.
            </p>
            <ListGroup>
              <ListGroup.Item>
                <Icon icon={faCheck} className="mr-2" />
                Feature One
              </ListGroup.Item>
              <ListGroup.Item>
                <Icon icon={faCheck} className="mr-2" />
                Feature Two
              </ListGroup.Item>
              <ListGroup.Item>
                <Icon icon={faCheck} className="mr-2" />
                Feature Three
              </ListGroup.Item>
              <ListGroup.Item>
                <Icon icon={faCheck} className="mr-2" />
                Feature Four
              </ListGroup.Item>
              <ListGroup.Item>
                <Icon icon={faCheck} className="mr-2" />
                Feature Five
              </ListGroup.Item>
            </ListGroup>

            <Button variant="success" block className="mt-2">
              Get Now!
            </Button>
          </Card.Body>
          <Card.Footer>1 Year Plan</Card.Footer>
        </Card>
      </Col>
    );
  });
  return (
    <Container className="text-center">
      <Row className="my-5">{content}</Row>
    </Container>
  );
}

export default Plans;
