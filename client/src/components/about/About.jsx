import React from 'react';
import HeadSection from '../layout/HeadSection';
import Info from './Info';
import IconCards from './IconCards';
import './About.css';
import SlickSlider from './SlickSlider';

function About() {
  const title = 'About Us';
  const text =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, aperiam.';
  return (
    <>
      <HeadSection title={title} text={text} />
      <Info />
      <IconCards />
      <SlickSlider />
    </>
  );
}

export default About;
