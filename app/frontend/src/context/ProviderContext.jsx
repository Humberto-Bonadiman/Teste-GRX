import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [logicType, setLogicType] = useState('');
  const [justificationType, setJustificationType] = useState('');
  const [challengesType, setChallengesType] = useState('');
  const [selectType, setSelectType] = useState('');
  const [active, setActive] = useState(false);

  const contextValue = {
    logicType,
    setLogicType,
    justificationType,
    setJustificationType,
    challengesType,
    setChallengesType,
    selectType,
    setSelectType,
    active,
    setActive,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;