import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Info() {
  return (
    <Container>
      <Row>
        <Col md={6} className="mt-4 order-1 order-md-0">
          <h2>What We Do</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            vitae ab doloribus, facere quibusdam molestias! Quo reiciendis
            blanditiis inventore, accusantium harum dicta quasi rem explicabo
            hic quis illum fuga dolorem necessitatibus iure quibusdam laborum
            cupiditate quam eaque amet, consequuntur tenetur cumque repellat,
            nobis commodi! Facilis, quis! Excepturi perspiciatis inventore odio
            atque nesciunt quia sit officiis perferendis voluptatibus deserunt
            velit accusamus quaerat illum minus, sequi ut tempore voluptas dicta
            sunt explicabo, distinctio obcaecati!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            doloribus velit exercitationem, praesentium corrupti nobis dicta
            doloremque, dolores placeat corporis similique fuga ratione at
            repellat harum quibusdam, consectetur alias esse qui sapiente odit
            autem tenetur. Modi velit nam impedit delectus dignissimos sequi
            debitis, repellendus et a non ab eius odio?
          </p>
        </Col>
        <Col md={6} className="order-0 order-md-1">
          <Image
            className="info-image"
            src="https://source.unsplash.com/random/700x700/?technology"
            roundedCircle
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Info;
