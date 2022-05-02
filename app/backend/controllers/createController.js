const CreateService = require('../services/createService');

const create = async (request, response) => {
  const { Pergunta1, Pergunta2, Pergunta3, Pergunta4 } = request.body;
  const result = await CreateService.create({ Pergunta1, Pergunta2, Pergunta3, Pergunta4 });

  return response.status(201).json(result);
}

module.exports = { create };