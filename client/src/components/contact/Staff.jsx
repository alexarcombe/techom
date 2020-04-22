import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Staff() {
  const staff = [
    {
      id: 0,
      name: 'Rochi Vidal',
      title: 'Marketing Manager',
      image: '/images/person1.jpg',
    },
    {
      id: 1,
      name: 'Maria Svensson',
      title: 'Business Manager',
      image: '/images/person2.jpg',
    },
    {
      id: 2,
      name: 'Patrik Persson',
      title: 'CEO',
      image: '/images/person3.jpg',
    },
    {
      id: 3,
      name: 'Alexander Arcombe',
      title: 'Web Developer',
      image: '/images/person4.jpg',
    },
  ];

  const content = staff.map((person) => {
    return (
      <Col key={person.id} sm="6" lg="3" className="my-2">
        <Image src={person.image} roundedCircle />
        <h4 className="mt-2">{person.name}</h4>
        <small>{person.title}</small>
      </Col>
    );
  });
  return (
    <section className="text-center text-white bg-dark py-4">
      <Container>
        <Row>
          <Col>
            <h2>Our Staff</h2>
          </Col>
        </Row>
        <Row>{content}</Row>
      </Container>
    </section>
  );
}
