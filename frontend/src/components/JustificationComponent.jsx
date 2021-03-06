import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import '../styles/justificationComponent.css';

export default function JustificationComponent() {
  const { setActive, justificationType, setJustificationType } = useContext(AppContext);
  

  useEffect(() => {
    const justificationLength = () => {
      if (justificationType.length < 15 || justificationType.length > 200) {
        return setActive(false);
      }
      return setActive(true);
    };
    justificationLength();
  }, [justificationType, setActive])

  return(
    <fieldset>
      <label class="form-label">4) Por favor, justifique a resposta anterior</label>
      <br/>
      <textarea
        class="form-control"
        onChange={({ target: { value } }) => setJustificationType(value)}
      >
        { justificationType }
      </textarea>
      <p
        className="justificationLength"
        style={{ color: justificationType.length < 15 || justificationType.length > 200 ? 'red' : 'black' }}
      >
        <span>{ justificationType.length }</span>
        /200
      </p>
    </fieldset>
  )
}