import React, { createContext } from 'react';

export const Context = createContext();
export const UserContext = ({ children }) => {
  const user = { name: 'John Doe', phn: '1234567890' };
  return (
    <div>
      <Context.Provider value={user}>{children}</Context.Provider>
    </div>
  );
};
export default UserContext;