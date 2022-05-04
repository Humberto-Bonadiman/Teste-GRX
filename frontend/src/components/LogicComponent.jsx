import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/logicComponent.css';

export default function LogicComponent() {
  const { logicType, setLogicType } = useContext(AppContext);

  return (
    <fieldset>
      <label class="form-label">1) Você se considera bom em lógica?</label>
      <br />
      <input
        class="btn-check"
        id="logic-yes"
        type="radio"
        name={logicType}
        value=" Sim "
        onChange={({ target: { value } }) => setLogicType(value)}
      />
      <label class="btn btn-secondary" htmlFor="logic-yes">
        Sim
      </label>        

      <input
        class="btn-check"
        id="logic-no"
        type="radio"
        name={logicType}
        value=" Não "
        onChange={({ target: { value } }) => setLogicType(value)}
      />
      <label class="btn btn-secondary" htmlFor="logic-no">
        Não
      </label>
      <br />
    </fieldset>
  )
}