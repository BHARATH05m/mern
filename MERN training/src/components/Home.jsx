import React from 'react';

const Home = ({ items }) => {
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

export default Home;
