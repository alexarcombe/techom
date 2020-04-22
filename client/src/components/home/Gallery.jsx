import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function Gallery() {
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState('');

  const content = [];
  let i = 0;
  let size;
  for (i; i < 6; i++) {
    size = 560 + i;
    content.push(
      <Col key={i} md={4} className="py-2">
        <Button
          className="p-0 border-0"
          onClick={(e) => {
            setPhoto(e.target.src);
            setOpen(true);
          }}
        >
          <Image
            src={`https://source.unsplash.com/random/${size}x${size}`}
            alt=""
            fluid
          />
        </Button>
      </Col>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col className="text-center">
          <h2>Photo Gallery</h2>
          <p className="text-muted">Check out our photos</p>
        </Col>
      </Row>
      <Row>{content}</Row>
      {open && (
        <Lightbox
          mainSrc={photo}
          onCloseRequest={() => setOpen(false)}
        ></Lightbox>
      )}
    </Container>
  );
}

export default Gallery;
