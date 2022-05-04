const DataService = require('../services/dataService');

const create = async (request, response) => {
  const { Pergunta1, Pergunta2, Pergunta3, Pergunta4 } = request.body;
  const result = await DataService.create({ Pergunta1, Pergunta2, Pergunta3, Pergunta4 });

  return response.status(201).json(result);
};

module.exports = { create };