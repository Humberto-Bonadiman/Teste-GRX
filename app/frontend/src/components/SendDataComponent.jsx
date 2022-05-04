import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { postApiResult } from '../services/fetchApi';
import questionnaireAnswers from './questionnaireAnswers.json';

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
  }, [logicType, active, challengesType,selectType]);

  const arrayQuestionary = [questionnaireAnswers];

  const getData = arrayQuestionary.map((answers) => {
    return setGetJson(answers);
  })

  const handleClick = async () => {
    await postApiResult(logicType, challengesType, selectType, justificationType);
    setShowResult(true);
    getData();
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