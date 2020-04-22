import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faBullhorn,
  faComments,
  faBox,
  faCreditCard,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';

function IconCards() {
  const icons = [
    faBuilding,
    faBullhorn,
    faComments,
    faBox,
    faCreditCard,
    faCoffee,
  ];

  let color = 'danger';

  const content = icons.map((icon) => {
    color = color === 'danger' ? 'dark' : 'danger';
    return (
      <Col key={icon.iconName} lg="4" md="6" className="p-3">
        <Card className={`text-center text-white bg-${color}`}>
          <Card.Body>
            <Icon icon={icon} size="3x" />
            <h3>Some Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              accusantium inventore qui officia et aperiam vel voluptas eaque
              at! Voluptatum.
            </p>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <Container className="mb-4">
      <Row>{content}</Row>
    </Container>
  );
}

export default IconCards;
