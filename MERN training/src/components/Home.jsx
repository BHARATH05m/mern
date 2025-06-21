import React from 'react';
import About from './About';
import images from '../assets/th.jpg';
const Home = ({ items }) => {
  return (
    <div>
      <About items={items} />
    </div>
  );
};

export default Home;
