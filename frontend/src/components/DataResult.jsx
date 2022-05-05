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

  const sumNumbers = allNumbers.reduce((soma, index) => {
    return soma + index;
  });

  const positivePercentage = parseInt((getJson.QuantidadePositiva / sumNumbers) * 100);
  const negativePercentage = parseInt((getJson.QuantidadeNegativa / sumNumbers) * 100);
  const unratedPercentage = parseInt((getJson.QuantidadeNaoAvaliada / sumNumbers) * 100);

  const positiveText = (
    <p className="number-result">
      Positiva: { getJson.QuantidadePositiva }, % Positiva: { positivePercentage }%
    </p>
  );
  const negativeText = (
    <p className="number-result">
      Negativa: { getJson.QuantidadeNegativa }, % Negativa: { negativePercentage }%
    </p>    
  );
  const notEvaluatedText = (
    <p className="number-result">
      Não avaliada: { getJson.QuantidadeNaoAvaliada }, % Não Avaliada: { unratedPercentage }%
    </p>
  );

  allNumbers.sort((a, b) => b - a);

  const organizeResults = () => {
    if (allNumbers[0] === getJson.QuantidadePositiva && allNumbers[1] === getJson.QuantidadeNegativa) {
      return (
        <div>
          { positiveText }
          { negativeText }
          { notEvaluatedText}
        </div>
      )
    }
    if (allNumbers[1] === getJson.QuantidadePositiva && allNumbers[0] === getJson.QuantidadeNegativa) {
      return (
        <div>
          { negativeText }
          { positiveText }
          { notEvaluatedText }
        </div>
      )
    }
    if (allNumbers[0] === getJson.QuantidadePositiva && allNumbers[1] === getJson.QuantidadeNaoAvaliada) {
      return (
        <div>
          { positiveText }
          { notEvaluatedText }
          { negativeText }
        </div>
      )
    }
    if (allNumbers[0] === getJson.QuantidadeNegativa && allNumbers[1] === getJson.QuantidadeNaoAvaliada) {
      return (
        <div>
          { negativeText }
          { notEvaluatedText }
          { positiveText }
        </div>
      )
    }
  }

  return (
    <>
      <h2 className="title-result">Resultado coleta de dados</h2>
      <section>
        <p className="number-result">Total: { sumNumbers }</p>
        { organizeResults() }
      </section>
    </>
  )
}

export default DataResult;
