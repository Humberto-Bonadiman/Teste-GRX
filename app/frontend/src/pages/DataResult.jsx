import React from 'react';

function DataResult() {

  const positive = 4;
  const negative = 0;
  const notEvaluated = 0;

  return (
    <>
      <header>
        <h1>Resultado coleta de dados</h1>
      </header>
      <section>
        <p>Positiva: { positive }</p>
        <p>Negativa: { negative }</p>
        <p>Não avaliada: { notEvaluated }</p>
      </section>
    </>
    
  )
}

export default DataResult;
