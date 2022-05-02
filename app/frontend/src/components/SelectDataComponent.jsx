import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function SelectDataComponent() {
  const { selectType, setSelectType } = useContext(AppContext);
  const dataSelect = ['Sim', 'Não', 'Não Sei', 'Agora!!'];

  return(
    <fieldset>
      <label className="selectData">3) Gostaria de fazer parte da GRX?</label>
      <br/>
      <select
        name={ selectType }
        onChange={({ target: { value } }) => setSelectType(value)}
      >
        <option value="" data-default disabled selected></option>
        { dataSelect.map((itemSelect, index) => (
          <option key={ index } value={ itemSelect }>{ itemSelect }</option>
        ))}
      </select>
    </fieldset>
  )
}