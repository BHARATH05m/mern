import React from 'react';

const About = ({ items = [] }) => {
  return (
    <div>
      <ol>
        {items.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ol>
    </div>
  );
};

export default About;
