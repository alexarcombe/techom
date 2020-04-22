import React from 'react';
import HeadSection from '../layout/HeadSection';
import Plans from './Plans';
import Questions from './Questions';
import './Services.css';

function Services() {
  return (
    <>
      <HeadSection
        title="Our Services"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, molestiae."
      />
      <Plans />
      <Questions />
    </>
  );
}

export default Services;
