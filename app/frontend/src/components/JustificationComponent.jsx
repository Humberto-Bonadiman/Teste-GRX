import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function JustificationComponent() {
  const { justificationType, setJustificationType } = useContext(AppContext);

/*   const justificationLength = () => {
    if (justificationType.length < 15 || justificationLength.length > 200) {
      return false;
    }
    return true;
  } */

  return(
    <fieldset>
      <label className="justification">4) Por favor, justifique a resposta anterior</label>
      <br/>
      <textarea
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