import React, { useContext } from 'react';
import LogicComponent from '../components/LogicComponent';
import ChallengesComponent from '../components/ChallengesComponet';
import SelectDataComponent from '../components/SelectDataComponent';
import JustificationComponent from '../components/JustificationComponent';
import SendDataComponent from '../components/SendDataComponent';
import DataResult from '../components/DataResult';
import AppContext from '../context/AppContext';
import '../styles/collectData.css';

function CollectData() {
  const { showResult } = useContext(AppContext)
  
  return (
    <div className="form-data">
      <h1>Coleta de dados</h1>
      <form className="data-collect">
        <LogicComponent />
        <ChallengesComponent />
        <SelectDataComponent />
        <JustificationComponent />
        <SendDataComponent />
        { showResult && <DataResult /> }
      </form>
    </div>
  )
}

export default CollectData;
