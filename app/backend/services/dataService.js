const fs = require('fs').promises;
const DataModel = require('../models/dataModel');
const arquivoJson = '../frontend/src/components/questionnaireAnswers.json';

const create = async (questions) => {
  const questionnaireAnswers = await DataModel.create(questions);
  fs.writeFile(arquivoJson, JSON.stringify(questionnaireAnswers))
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });

  return questionnaireAnswers;
};

module.exports = { create };