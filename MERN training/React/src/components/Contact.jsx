import React, { useContext } from 'react';
import { Context } from "../hooks/Context.jsx";

const Contact = () => {
  const user = useContext(Context);

  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.phn}</h2>
    </div>
  );
};

export default Contact;
