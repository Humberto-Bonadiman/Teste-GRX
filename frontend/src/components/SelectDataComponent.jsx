import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function SelectDataComponent() {
  const { selectType, setSelectType } = useContext(AppContext);
  const dataSelect = ['Sim', 'Não', 'Não Sei', 'Agora!!'];

  return(
    <fieldset>
      <label class="form-label">3) Gostaria de fazer parte da GRX?</label>
      <br/>
      <select
        name={ selectType }
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        defaultValue=""
        onChange={({ target: { value } }) => setSelectType(value)}
      >
        <option value="" data-default disabled selected>Escolha uma opção</option>
        { dataSelect.map((itemSelect, index) => (
          <option key={ index } value={ itemSelect }>{ itemSelect }</option>
        ))}
      </select>
    </fieldset>
  )
}