import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import { useHistory } from 'react-router';

export default function SendDataComponent() {
  const [activeButton, setActiveButton] = useState(true);
  const {
    logicType,
    setLogicType,
    justificationType,
    setJustificationType,
    challengesType,
    setChallengesType,
    selectType,
    setSelectType,
  } = useContext(AppContext);
  const history = useHistory();

  const handleClick = () => {
    history.push('/result');
  };

  return(
    <button
      type="button"
      className="send-data-btn"
      disabled={ activeButton }
      onClick={ handleClick }
    >
      Enviar
    </button>
  )
}