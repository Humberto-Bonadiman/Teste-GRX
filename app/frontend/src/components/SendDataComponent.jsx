import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { useHistory } from 'react-router';

export default function SendDataComponent() {
  const [disabledButton, setdisabledButton] = useState(true);
  const {
    logicType,
    active,
    challengesType,
    selectType,
  } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    const checkButton = () => {
      if (logicType === '' || challengesType === '' || selectType === '' || active === false) {
        return setdisabledButton(true);
      }
      return setdisabledButton(false);
    }
    checkButton();
  }, [logicType, active, challengesType,selectType])

  const handleClick = () => {
    history.push('/result');
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