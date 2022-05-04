import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/dataResult.css'

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
          <p className="number-result">Positiva: { getJson.QuantidadePositiva }</p>
          <p className="number-result">Negativa: { getJson.QuantidadeNegativa }</p>
          <p className="number-result">Não avaliada: { getJson.QuantidadeNaoAvaliada }</p>
        </div>
      )
    }
    if (allNumbers[1] === getJson.QuantidadePositiva && allNumbers[0] === getJson.QuantidadeNegativa) {
      return (
        <div>
          <p className="number-result">Negativa: { getJson.QuantidadeNegativa }</p>
          <p className="number-result">Positiva: { getJson.QuantidadePositiva }</p>
          <p className="number-result">Não avaliada: { getJson.QuantidadeNaoAvaliada }</p>
        </div>
      )
    }
    if (allNumbers[0] === getJson.QuantidadePositiva && allNumbers[1] === getJson.QuantidadeNaoAvaliada) {
      return (
        <div>
          <p className="number-result">Positiva: { getJson.QuantidadePositiva }</p>
          <p className="number-result">Não avaliada: { getJson.QuantidadeNaoAvaliada }</p>
          <p className="number-result">Negativa: { getJson.QuantidadeNegativa }</p>
        </div>
      )
    }
    if (allNumbers[0] === getJson.QuantidadeNegativa && allNumbers[1] === getJson.QuantidadeNaoAvaliada) {
      return (
        <div>
          <p className="number-result">Negativa: { getJson.QuantidadeNegativa }</p>
          <p className="number-result">Não avaliada: { getJson.QuantidadeNaoAvaliada }</p>
          <p className="number-result">Positiva: { getJson.QuantidadePositiva }</p>
        </div>
      )
    }
  }

  return (
    <>
      <h2 className="title-result">Resultado coleta de dados</h2>
      <section>
        { organizeResults() }
      </section>
    </>
  )
}

export default DataResult;
