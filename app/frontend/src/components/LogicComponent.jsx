import React, { useState } from 'react';

export default function LogicComponent() {
  const [logicType, setLogicType] = useState('');
  return (
    <fieldset>
      <label className="logic">1) Você se considera bom em lógica?</label>
      <br />
      <label className="logic-label" htmlFor="logic-yes">
        <input
          className="logic"
          id="logic-yes"
          type="radio"
          name={logicType}
          value=" Sim "
          onChange={({ target: { value } }) => setLogicType(value)}
        />
        Sim
      </label>
      <label className="logic-label" htmlFor="logic-no">
        <input
          className="logic"
          id="logic-no"
          type="radio"
          name={logicType}
          value=" Não "
          onChange={({ target: { value } }) => setLogicType(value)}
        />
        Não
      </label>
      <br />
    </fieldset>
  )
}