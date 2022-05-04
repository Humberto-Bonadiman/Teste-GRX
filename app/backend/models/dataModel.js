/* const fs = require('fs').promises;
const arquivoJson = './questionnaireAnswers.json'; */

const create = async (questions) => {
  const { Pergunta1, Pergunta2, Pergunta3, Pergunta4 } = questions;
  let QuantidadePositiva = 0;
  let QuantidadeNegativa = 0;
  let QuantidadeNaoAvaliada = 0;
  const questionnaireAnswers = {
    Pergunta1: Pergunta1.substring(1,4),
    Pergunta2,
    Pergunta3,
    Pergunta4,
  };

  const arrayAnswers = Object.values(questionnaireAnswers);

  arrayAnswers.forEach((answer) => {
    if (answer === 'Sim') QuantidadePositiva += 1;
    if (answer === 'Não') QuantidadeNegativa += 1;
    if (answer === 'Não Sei') QuantidadeNaoAvaliada += 1;
    if (answer === 'Agora!!') QuantidadePositiva += 2;
  });

  questionnaireAnswers.QuantidadePositiva = QuantidadePositiva;
  questionnaireAnswers.QuantidadeNegativa = QuantidadeNegativa;
  questionnaireAnswers.QuantidadeNaoAvaliada = QuantidadeNaoAvaliada;

  return questionnaireAnswers;
};

/* const getAll = async () => {
  const read = fs.readFile(arquivoJson, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
    return data;
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${arquivoJson}\n Erro: ${err}`);
    process.exit(1);
  });

  return read;
} */

module.exports = { create };