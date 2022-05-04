const emptyAnswers = (request, response, next) => {
  const { Pergunta1, Pergunta2, Pergunta3, Pergunta4 } = request.body;
  if (Pergunta1 === '' || Pergunta2 === '' || Pergunta3 === '' || Pergunta4 === '') {
    return response.status(400).json({ message: 'Todas as perguntas precisam ser respondidas' });
  }

  next();
};

const answerSize = (request, response, next) => {
  const { Pergunta4 } = request.body;
  if (Pergunta4.length < 15 || Pergunta4.length > 200) {
    return response.status(400).json({ message: 'A quarta resposta deve conter entre 15 e 200 caracteres' });
  }

  next();
};

module.exports = { emptyAnswers, answerSize };