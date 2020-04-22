import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-dark py-4">
      <Container>
        <Row>
          <Col xs="10" md="12" className="text-white text-center mx-auto">
            <h5>What people think of our company</h5>
            <Slider {...settings}>
              <div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis quos temporibus a tenetur saepe sit doloribus
                  dignissimos eius iure nostrum.
                </p>
                <p className="text-muted">- Clark Kent from Google</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque suscipit repellendus aspernatur eveniet vitae aperiam?
                </p>
                <p className="text-muted">- Peter Parker from Amazon</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  corporis vero aliquam iste harum error quidem tempore
                  perferendis nobis autem dolor, in eos aspernatur quas?
                </p>
                <p className="text-muted">- Bruce Wayne from Apple</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  quae!
                </p>
                <p className="text-muted">- Robert Downey, Jr from Facebook</p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SlickSlider;
