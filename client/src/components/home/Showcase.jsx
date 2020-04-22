import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

function Showcase() {
  return (
    <Carousel>
      <Carousel.Item className="carousel-image-1">
        <Carousel.Caption className="text-right my-5">
          <h1>Heading One</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            molestiae!
          </p>
          <Button variant="danger" size="lg">
            Sign Up Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-image-2">
        <Carousel.Caption className="my-5">
          <h1>Heading Two</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quas
            ipsum est odit culpa dicta, minus autem sunt adipisci ab.
          </p>
          <Button variant="info" size="lg">
            Learn More
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-image-3">
        <Carousel.Caption className="text-right my-5">
          <h1>Heading Three</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
            dignissimos.
          </p>
          <Button variant="success" size="lg">
            Learn More
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Showcase;
