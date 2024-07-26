import React, { createContext, useState } from 'react';

export const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  const [state, setState] = useState('');

  return (
    <SchoolContext.Provider value={{ state, setState }}>
        {children}
      </SchoolContext.Provider>
  );
};
