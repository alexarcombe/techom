import React from 'react';
import HeadSection from '../layout/HeadSection';
import Info from './Info';
import Staff from './Staff';

function Contact() {
  return (
    <>
      <HeadSection
        title="Contact Us"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Info />
      <Staff />
    </>
  );
}

export default Contact;
