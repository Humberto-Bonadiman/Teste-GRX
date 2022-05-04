import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { postApiResult } from '../services/fetchApi';

export default function SendDataComponent() {
  const [disabledButton, setdisabledButton] = useState(true);
  const {
    logicType,
    active,
    challengesType,
    selectType,
    justificationType,
    setGetJson,
    setShowResult,
  } = useContext(AppContext);

  useEffect(() => {
    const checkButton = () => {
      if (logicType === '' || challengesType === '' || selectType === '' || active === false) {
        return setdisabledButton(true);
      }
      return setdisabledButton(false);
    }
    checkButton();
  }, [logicType, active, challengesType,selectType])

  const handleClick = async () => {
    await postApiResult(logicType, challengesType, selectType, justificationType);
    setShowResult(true);
    await fetch('../questionnaireAnswers.json')
      .then((response) => response.json())
      .then((result) => setGetJson(JSON.parse(result)));
  };

  return(
    <button
      type="button"
      className="send-data-btn"
      disabled={ disabledButton }
      onClick={ handleClick }
    >
      Enviar
    </button>
  )
}