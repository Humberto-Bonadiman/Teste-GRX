const fs = require('fs').promises;
const CreateModel = require('../models/createModel');

const create = async (questions) => {
  const questionnaireAnswers = await CreateModel.create(questions);
  fs.writeFile(arquivoJson, JSON.stringify(questionnaireAnswers))
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });

  return questionnaireAnswers;
}

module.exports = { create };