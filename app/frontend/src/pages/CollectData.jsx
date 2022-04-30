import React, { useState } from 'react';

function CollectData() {
  const [searchType, setSearchType] = useState('');
  return (
    <>
      <h1>Coleta de dados</h1>
      <form className="data-collect">
        <label className="logic">1) Você se considera bom em lógica?</label>
        <br/>
        <label className="logic-label" htmlFor="logic-yes">
          <input
            className="radio"
            id="logic-yes"
            type="radio"
            name={ searchType }
            value="Sim"
            onChange={ ({ target: { value } }) => setSearchType(value) }
          />
          Sim
        </label>
        <label className="logic-label" htmlFor="logic-no">
          <input
            className="radio"
            id="logic-no"
            type="radio"
            name={ searchType }
            value="Não"
            onChange={ ({ target: { value } }) => setSearchType(value) }
          />
          Não
        </label>
      </form>
    </>
  )
}

export default CollectData;
