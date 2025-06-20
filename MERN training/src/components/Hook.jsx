import React from 'react';
import { Link } from 'react-router-dom';

const Hook = () => {
  return (
    <div>
      <Link to="/state">
        <h1 className="nav-link">STATE</h1>
      </Link>
      <Link to="/effect">
        <h1 className="nav-link">Effect</h1>
      </Link>
      <Link to="/effect2">
        <h1 className="nav-link">Effect2</h1>
      </Link>
    </div>
  );
};

export default Hook;
