import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './layout.css';

function HeadSeaction(props) {
  const { title, text } = props;
  return (
    <header>
      <div className="dark-overlay">
        <Container>
          <Row>
            <Col>
              <h1>{title}</h1>
              <p>{text}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

HeadSeaction.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HeadSeaction;
