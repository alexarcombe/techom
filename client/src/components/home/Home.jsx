import React from 'react';
import Showcase from './Showcase';
import Goals from './Goals';
import GetStarted from './GetStarted';
import Computer from './Computer';
import Video from './Video';
import Gallery from './Gallery';
import './Home.css';
import Newsletter from './Newsletter';

function Home() {
  return (
    <>
      <Showcase />
      <Goals />
      <GetStarted />
      <Computer />
      <Video />
      <Gallery />
      <Newsletter />
    </>
  );
}

export default Home;
