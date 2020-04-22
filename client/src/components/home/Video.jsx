import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function Video() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <>
      <section id="video">
        <div className="dark-overlay">
          <Container>
            <Row>
              <Col className="text-center text-white pt-5">
                <Button variant="none" onClick={handleOpen}>
                  <Icon icon={faPlay} size="4x" className="text-white pb-1" />
                </Button>
                <h3>What We Do</h3>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Button
            variant="outline-danger"
            onClick={handleClose}
            data-dismiss="modal"
            className="d-block ml-auto mb-3"
          >
            <span>&times;</span>
          </Button>
          <iframe
            title="myFrame"
            src={'https://www.youtube.com/embed/eX_L39UvZes'}
            frameborder="0"
            height="350"
            width="100%"
            allowFullScreen
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Video;
