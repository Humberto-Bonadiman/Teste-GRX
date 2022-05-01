import React, { useState } from 'react';

export default function JustificationComponent() {
  const [justificationType, setJustificationType] = useState('');

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