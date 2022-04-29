import React from 'react';
import AppContext from './appContext';

function Provider({ children }) {

  const contextValue = { };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;