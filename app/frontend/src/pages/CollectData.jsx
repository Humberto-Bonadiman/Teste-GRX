import React from 'react';
import LogicComponent from '../components/LogicComponent';
import ChallengesComponent from '../components/ChallengesComponet';
import SelectDataComponent from '../components/SelectDataComponent';

function CollectData() {
  
  
  return (
    <>
      <h1>Coleta de dados</h1>
      <form className="data-collect">
        <LogicComponent />
        <ChallengesComponent />
        <SelectDataComponent />
      </form>
    </>
  )
}

export default CollectData;
