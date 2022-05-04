import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function DataResult() {
  const { getJson } = useContext(AppContext);

  const allNumbers = [
    getJson.QuantidadePositiva,
    getJson.QuantidadeNegativa,
    getJson.QuantidadeNaoAvaliada
  ];

  allNumbers.sort((a, b) => b - a);

  const organizeResults = () => {
    if (allNumbers[0] === getJson.QuantidadePositiva && allNumbers[1] === getJson.QuantidadeNegativa) {
      return (
        <div>
          <p>Positiva: { getJson.QuantidadePositiva }</p>
          <p>Negativa: { getJson.QuantidadeNegativa }</p>
          <p>Não avaliada: { getJson.QuantidadeNaoAvaliada }</p>
        </div>
      )
    }
    if (allNumbers[1] === getJson.QuantidadePositiva && allNumbers[0] === getJson.QuantidadeNegativa) {
      return (
        <div>
          <p>Negativa: { getJson.QuantidadeNegativa }</p>
          <p>Positiva: { getJson.QuantidadePositiva }</p>
          <p>Não avaliada: { getJson.QuantidadeNaoAvaliada }</p>
        </div>
      )
    }
    if (allNumbers[0] === getJson.QuantidadePositiva && allNumbers[1] === getJson.QuantidadeNaoAvaliada) {
      return (
        <div>
          <p>Positiva: { getJson.QuantidadePositiva }</p>
          <p>Não avaliada: { getJson.QuantidadeNaoAvaliada }</p>
          <p>Negativa: { getJson.QuantidadeNegativa }</p>
        </div>
      )
    }
    if (allNumbers[0] === getJson.QuantidadeNegativa && allNumbers[1] === getJson.QuantidadeNaoAvaliada) {
      return (
        <div>
          <p>Negativa: { getJson.QuantidadeNegativa }</p>
          <p>Não avaliada: { getJson.QuantidadeNaoAvaliada }</p>
          <p>Positiva: { getJson.QuantidadePositiva }</p>
        </div>
      )
    }
  }

  return (
    <>
      <header>
        <h1>Resultado coleta de dados</h1>
      </header>
      <section>
        { organizeResults() }
      </section>
    </>
  )
}

export default DataResult;
