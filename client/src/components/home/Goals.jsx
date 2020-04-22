import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCog, faCloud, faCartPlus } from '@fortawesome/free-solid-svg-icons';

function Goals() {
  const icons = [
    {
      id: 1,
      icon: faCog,
      title: 'Turning Gears',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est!',
    },
    {
      id: 2,
      icon: faCloud,
      title: 'Sending Data',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, reprehenderit.',
    },
    {
      id: 3,
      icon: faCartPlus,
      title: 'Making Money',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, dolores.',
    },
  ];

  const content = icons.map((i) => (
    <Col key={i.id} md={4}>
      <Icon icon={i.icon} size="4x" className="mb-2" />
      <h3>{i.title}</h3>
      <p>{i.text}</p>
    </Col>
  ));

  return (
    <Container>
      <Row className="justify-content-center my-5 text-center">{content}</Row>
    </Container>
  );
}

export default Goals;
