import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [logicType, setLogicType] = useState('');
  const [justificationType, setJustificationType] = useState('');
  const [challengesType, setChallengesType] = useState('');
  const [selectType, setSelectType] = useState('');
  const [active, setActive] = useState(false);
  const [getJson, setGetJson] = useState('');
  const [showResult, setShowResult] = useState(false);

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
    getJson,
    setGetJson,
    showResult,
    setShowResult,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;